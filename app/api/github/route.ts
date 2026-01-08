import { NextResponse } from "next/server";
import { GithubParam } from "@/app/[locale]/constants/github";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fetchAll = searchParams.get("all") === "true";

  try {
    const res = await fetch(
      `https://api.github.com/users/${GithubParam.GITHUB_USERNAME}/repos`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: {
          revalidate: GithubParam.REVALIDATE_TIME,
          tags: ["github-repos"],
        },
      }
    );

    if (!res.ok)
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}.` },
        { status: res.status }
      );

    const allRepos = await res.json();

    let targetRepos = allRepos;

    if (!fetchAll) {
      const selectedRepos = GithubParam.SELECTED_REPOS.map((name) =>
        name.toLowerCase()
      );
      targetRepos = allRepos.filter((repo: any) =>
        selectedRepos.includes(repo.name.toLowerCase())
      );
    }

    const projects = await Promise.all(
      targetRepos.map(async (repo: any) => {
        try {
          const langRes = await fetch(repo.languages_url, {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            next: {
              revalidate: GithubParam.REVALIDATE_TIME,
            },
          });

          const langData = await langRes.json();

          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            languages:
              Object.keys(langData).length > 0
                ? Object.keys(langData)
                : [repo.language].filter(Boolean),
          };
        } catch {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            languages: [repo.language].filter(Boolean),
          };
        }
      })
    );

    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

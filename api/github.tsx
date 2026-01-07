import { NextResponse } from "next/server";

const GITHUB_USERNAME: string = "mateusz-bogacz-collegiumwitelona";
const SELECTED_REPOS: string[] = ["Faily", "weather_Station", "fuel"];

const REVALIDATE_TIME: number = 86400; // 24h cache

export async function GetDataForIndexProjects() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: {
        revalidate: REVALIDATE_TIME,
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

  const filtered = allRepos.filter((repo: any) =>
    SELECTED_REPOS.map((name) => name.toLowerCase()).includes(
      repo.name.toLowerCase()
    )
  );

  const projects = await Promise.all(
    filtered.map(async (repo: any) => {
      try {
        const langRes = await fetch(repo.languages_url, {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
          next: {
            revalidate: REVALIDATE_TIME,
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

  return NextResponse.json({ projects }, { status: 200 });
}

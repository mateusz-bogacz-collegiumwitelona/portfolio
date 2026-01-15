import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mateusz-bogacz-drewniak.pl/pl",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.mateusz-bogacz-drewniak.pl/en",
        },
      },
    },
    {
      url: "https://www.mateusz-bogacz-drewniak.pl/en",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.mateusz-bogacz-drewniak.pl/pl",
        },
      },
    },
  ];
}

import citiesData from "@/data/cities.json";

export interface PageData {
  Slug: string;
  Keyword_Context: string;
  Page_H1: string;
  Meta_Title: string;
}

const typedCitiesData = citiesData as PageData[];

export function getAllPages(): PageData[] {
  return typedCitiesData;
}

export function getPageBySlug(slug: string): PageData | undefined {
  return typedCitiesData.find((page) => page.Slug === slug);
}

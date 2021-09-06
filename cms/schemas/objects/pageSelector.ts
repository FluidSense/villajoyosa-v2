type PageNB = "Forsiden" | "Bilder" | "Området" | "Leie" | "Transport";
type PageEN = "Frontpage" | "Images" | "Area" | "Rent" | "Transport";

export const Pages: Record<PageEN, PageNB> = {
  Frontpage: "Forsiden",
  Images: "Bilder",
  Area: "Området",
  Rent: "Leie",
  Transport: "Transport",
};

const sharedPageSelectorInfo = {
  title: "Vises på side",
  name: "pageSelector",
  type: "string",
  options: {
    list: [
      { title: "Forsiden", value: "frontpage" },
      { title: "Bilder", value: "images" },
      { title: "Området", value: "area" },
      { title: "Leie", value: "rent" },
      { title: "Transport", value: "transport" },
    ],
    layout: "dropdown",
  },
};

export const createPageSelectorWithSubset = (
  selectorName: string,
  subsetOfPages: PageNB[]
) => {
  const optionsList = subsetOfPages.map(pageEnumToOption);
  return {
    ...sharedPageSelectorInfo,
    name: selectorName,
    options: { ...sharedPageSelectorInfo.options, list: optionsList },
  };
};

const PagesByNB = Object.entries(Pages).reduce(
  (newPages, [pageEN, pageNB]) => ({ ...newPages, [pageNB]: pageEN }),
  {} as Record<string, PageEN>
);

const pageEnumToOption = (page: PageNB) => ({
  title: page,
  value: PagesByNB[page].toLowerCase(),
});

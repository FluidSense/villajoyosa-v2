import client from "./sanityClient";

export const getPageTitle = async () => {
  const pageTitleQuery = '*[_type == "pageTitle"][0]';
  return await client.fetch(pageTitleQuery);
};

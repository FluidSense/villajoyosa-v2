// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import amenity from "./amenity";
import pageTitle from "./pageTitle";
import textWithIcon from "./objects/textWithIcon";
import location from "./location";
import textBlock from "./objects/textBlock";
import content from "./content";
import gallery from "./gallery";
import { createPageSelectorWithSubset, Pages } from "./objects/pageSelector";

const textPageSelector = createPageSelectorWithSubset("textPageSelector", [
  Pages.Frontpage,
  Pages.Area,
  Pages.Transport,
  Pages.Rent,
]);

const imagePageSelector = createPageSelectorWithSubset("imagePageSelector", [
  Pages.Frontpage,
  Pages.Images,
]);

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    textWithIcon,
    pageTitle,
    amenity,
    location,
    textBlock,
    textPageSelector,
    imagePageSelector,
    content,
    gallery,
  ]),
});

import S from "@sanity/desk-tool/structure-builder";
import { MdTitle } from "react-icons/md";

const singletonRestrictedPages = (listItem) =>
  !["pageTitle"].includes(listItem.getId());

const undesiredLibraryDocuments = (listItem) =>
  !["media.tag"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Sidetittel")
        .icon(MdTitle)
        .child(
          S.document()
            .schemaType("pageTitle")
            .documentId("15c71094-5e46-47eb-93b2-3b33dccc5311")
        ),
      ...S.documentTypeListItems()
        .filter(singletonRestrictedPages)
        .filter(undesiredLibraryDocuments),
    ]);

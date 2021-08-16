import S from '@sanity/desk-tool/structure-builder';

const singletonRestrictedPages = (listItem) =>
  !['pageTitle'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Sidetittel')
        .child(S.document().schemaType('pageTitle').documentId('15c71094-5e46-47eb-93b2-3b33dccc5311')),
      ...S.documentTypeListItems().filter(singletonRestrictedPages),
    ]);

import S from '@sanity/desk-tool/structure-builder';

const singletonRestrictedPages = (listItem) =>
  !['pageTitle'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Sidetittel')
        .child(S.document().schemaType('pageTitle').documentId('pageTitle')),
      ...S.documentTypeListItems().filter(singletonRestrictedPages),
    ]);

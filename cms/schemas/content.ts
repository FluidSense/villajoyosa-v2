export default {
  title: 'Tekstinnhold',
  name: 'content',
  type: 'document',
  fields: [
    {
      title: 'Navn',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Innholdstekst',
      name: 'text',
      type: 'textblock',
    },
    {
      title: 'Vises på side',
      description: 'Siden du vil at teksten skal vises på',
      name: 'displayPage',
      type: 'pageSelector',
    },
  ],
};

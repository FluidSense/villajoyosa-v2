export default {
  title: 'Butikker og lokasjoner av interesse',
  name: 'location',
  type: 'document',
  fields: [
    {
      title: 'Navn',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Tekst & Ikon',
      name: 'display',
      type: 'textWithIcon',
    },
  ],
};

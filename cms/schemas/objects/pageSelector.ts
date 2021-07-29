export default {
  title: 'Vises på side',
  name: 'pageSelector',
  type: 'string',
  options: {
    list: [
      { title: 'Forsiden', value: 'frontpage' },
      { title: 'Området', value: 'area' },
      { title: 'Leie', value: 'rent' },
      { title: 'Transport', value: 'transport' },
    ],
    layout: 'dropdown',
  },
};


export default {
  title: 'Text With Icon',
  name: 'textWithIcon',
  type: 'object',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        outputFormat: 'react'
      }
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
  ],
};

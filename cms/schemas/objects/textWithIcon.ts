import preview from 'part:sanity-plugin-icon-picker/preview';

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
  preview: {
    select: {
      provider: "icon.provider",
      name: "icon.name",
    },
    prepare(icon) {
      return {
        title: icon.provider,
        subtitle: icon.name,
        media: preview(icon),
      };
    },
  }
};

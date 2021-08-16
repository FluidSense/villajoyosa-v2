import preview from 'part:sanity-plugin-icon-picker/preview';
import { FaClipboardList } from 'react-icons/fa';

export default {
  title: 'Fasiliteter',
  name: 'amenity',
  icon: FaClipboardList,
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
  preview: {
    select: {
      title: 'name',
      provider: "display.icon.provider",
      name: "display.icon.name",
    },
    prepare(icon) {
      return {
        title: icon.title,
        media: preview(icon),
      };
    },
  }
};

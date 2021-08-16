import { FaMapMarkerAlt } from "react-icons/fa";
import preview from 'part:sanity-plugin-icon-picker/preview';

export default {
  title: 'Butikker og lokasjoner av interesse',
  name: 'location',
  icon: FaMapMarkerAlt,
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

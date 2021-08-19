
import { FaRegImage } from 'react-icons/fa';

export default {
  title: 'Bildegallery',
  name: 'imageGallery',
  icon: FaRegImage,
  type: 'document',
  fields: [
    {
      title: "Navn",
      name: "name",
      description: "Navn vil vises om man holder musepekeren over bildet",
      type: "string"
    },
    {
      title: 'Bilde',
      name: 'image',
      description: 'Bilde til bildegallery',
      type: 'image',
    },
  ],
};

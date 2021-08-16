import { FaMapMarkerAlt } from "react-icons/fa";

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
};

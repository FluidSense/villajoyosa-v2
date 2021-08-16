import { FaRegImages } from 'react-icons/fa';

export default {
  title: 'Bildekarusell-bilder',
  name: 'imageCarousel',
  icon: FaRegImages,
  type: 'document',
  fields: [
    {
      title: 'Bilde',
      name: 'image',
      description: 'Bredt bilde til looping på forsiden',
      type: 'image',
    },
  ],
};

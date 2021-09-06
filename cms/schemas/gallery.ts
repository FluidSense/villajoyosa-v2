import { FaRegImage } from "react-icons/fa";

export default {
  name: "gallery",
  type: "document",
  icon: FaRegImage,
  title: "Bildegallerier",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn på galleriet",
      description:
        "Navnet bør gi en indikasjon på hva galleriet skal brukes til og vises i kolonnen til venstre.",
    },
    {
      name: "images",
      type: "array",
      title: "Bilder",
      of: [
        {
          name: "image",
          type: "image",
          title: "Bilde",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternativ tekst",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      title: "Vises på side",
      description: "Siden du vil at teksten skal vises på",
      name: "displayPage",
      type: "pageSelector",
    },
  ],
  preview: {
    select: {
      image: "images.0",
      name: "name",
    },
    prepare(selection) {
      const { image, name } = selection;

      return {
        title: name,
        media: image,
      };
    },
  },
};

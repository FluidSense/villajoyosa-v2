type SanityDocument = {
  title: string;
  name: string;
  type: "document" | "object";
  fields: any[];
  [x: string]: any;
};
import { FaRegImage } from "react-icons/fa";

const staticImage: SanityDocument = {
  title: "Bildeposisjoner",
  name: "imagePosition",
  type: "document",
  icon: FaRegImage,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Plass",
      name: "position",
      type: "string",
      readonly: true,
      options: {
        list: [
          {
            title: "Vår leilighet",
            value: "vaarleilighet",
          },
          {
            title: "Banner på toppen",
            value: "banner",
          },
          { title: "Ved knapper", value: "actionbuttons" },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Bilde",
      name: "image",
      type: "image",
      fields: [
        {
          title: "Bildetekst",
          name: "caption",
          type: "string",
        },
      ],
      options: {
        metadata: ["dimensions"],
        hotspot: true,
      },
    },
  ],
};

export default staticImage;

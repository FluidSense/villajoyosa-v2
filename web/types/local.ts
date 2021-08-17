import { SanityIcon } from "./sanityTypes";

export type PageTitle = {
  title: string;
  subtitle: string;
};

export type TextWithIcon = {
  icon: SanityIcon;
  text: string;
};


export type Amenity = {
  name: string;
  display: TextWithIcon;
}
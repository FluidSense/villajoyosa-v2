import { SanityDocument } from "@sanity/client";
import { SanityIcon, SanityText } from "./sanityTypes";

type Pages = 'frontpage' | 'area' | 'rent' | 'transport';

export type PageTitle = {
  title: string;
  subtitle: string;
};

export type TextWithIcon = {
  icon: SanityIcon;
  text: string;
};

export type MapPosition = {
  lat: number;
  lng: number;
}

export type Amenity = SanityDocument & {
  name: string;
  display: TextWithIcon;
  position: MapPosition;
}

export type TextBlock = {
  name: string;
  displayPage: Pages;
  text: SanityText;
}
export type PageTitle = {
  title: string;
  subtitle: string;
};

export type TextWithIcon = {
  icon: Icon;
  text: string;
};

export type Icon = {
  provider: string;
  name: string;
}

export type Amenity = {
  name: string;
  display: TextWithIcon;
}
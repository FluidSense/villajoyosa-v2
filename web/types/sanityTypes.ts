type SanityDocument = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export type SanityIcon = SanityDocument & {
  provider: string;
  name: string;
};

export type SanityImage = SanityDocument & {
  name: string;
  imageUrl: string;
  dimensions: {
    width: string;
    height: string;
  };
  lqip?: string;
};

export type SanityTextBlock = {
  _key: string;
  _type: string;
  children: SanityTextBlockChild[];
  markDefs: any[];
  style: string;
};

export type SanityTextBlockChild = {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
};

export type SanityText = SanityTextBlock[];

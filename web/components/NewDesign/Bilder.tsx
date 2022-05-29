import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import { SanityImage } from "types/sanityTypes";
import { Lightbox } from "yet-another-react-lightbox";
import { VaarLeilighetHeader } from "./VaarLeilighet";

const BildeHeader = styled(VaarLeilighetHeader)``;

const MobileOnly = styled.div`
  display: initial;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const DesktopOnly = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: initial;
  }
`;

const Center = styled.div`
  display: block;
  margin: auto;
`;

const Width90Centered = styled(Center)`
  width: 90%;
  margin-bottom: 300px;
`;

type Props = {
  images: any[];
};

export default function Bilder({ images }: Props) {
  const [index, setIndex] = useState(-1);

  const imagesInPhotoAlbumFormat = images.map((img) => ({
    height: img.dimensions.height,
    width: img.dimensions.width,
    src: img.url,
  }));

  return (
    <>
      <BildeHeader>Bilder</BildeHeader>
      <MobileOnly>
        <PhotoAlbum
          layout="columns"
          photos={imagesInPhotoAlbumFormat}
          columns={2}
          onClick={(_event, _photo, index) => setIndex(index)}
        />
      </MobileOnly>
      <DesktopOnly>
        <Width90Centered>
          <PhotoAlbum
            layout="rows"
            photos={imagesInPhotoAlbumFormat}
            targetRowHeight={200}
            onClick={(_event, _photo, index) => setIndex(index)}
          />
        </Width90Centered>
      </DesktopOnly>
      <Lightbox
        slides={imagesInPhotoAlbumFormat}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}

import styled from "@emotion/styled";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import { urlFor } from "urlBuilder";
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

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
export default function Bilder({ images }: Props) {
  const [index, setIndex] = useState(-1);

  const imagesInPhotoAlbumFormat = images.map((img) => ({
    height: img.dimensions.height,
    width: img.dimensions.width,
    src: img.url,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round(
        (img.dimensions.height / img.dimensions.width) * breakpoint
      );
      return {
        src: urlFor(img.url).width(breakpoint).height(height).url(),
        width: breakpoint,
        height,
      };
    }),
  }));

  const slides = imagesInPhotoAlbumFormat.map(
    ({ src, width, height, images }) => ({
      src,
      aspectRatio: width / height,
      srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
      })),
    })
  );

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
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}

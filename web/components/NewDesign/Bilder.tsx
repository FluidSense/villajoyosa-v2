import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
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

export default function Bilder() {
  const [photos, setPhotos] =
    useState<{ src: string; height: number; width: number }[]>();
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const generatedPhotos = Array.from(Array(15).keys()).map(() => {
      const randHeight = Math.floor(Math.random() * 100 + 100);
      const randWidth = Math.floor(Math.random() * 314 + 100);
      return {
        src: `https://picsum.photos/${randWidth}/${randHeight}`,
        height: randHeight,
        width: randWidth,
      };
    });
    setPhotos(generatedPhotos);
  }, []);
  return (
    <>
      <BildeHeader>Bilder</BildeHeader>
      <MobileOnly>
        <PhotoAlbum layout="columns" photos={photos} columns={2} />
      </MobileOnly>
      <DesktopOnly>
        <Width90Centered>
          <PhotoAlbum
            layout="rows"
            photos={photos}
            targetRowHeight={200}
            onClick={(_event, _photo, index) => setIndex(index)}
          />
          <Lightbox
            //@ts-ignore
            slides={photos}
            //@ts-ignore
            open={index >= 0}
            //@ts-ignore
            index={index}
            //@ts-ignore
            close={() => setIndex(-1)}
          />
        </Width90Centered>
      </DesktopOnly>
    </>
  );
}

import styled from "@emotion/styled";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import { urlFor } from "urlBuilder";
import { Lightbox } from "yet-another-react-lightbox";
import { DesktopOnly, Header, MobileOnly } from "./common";
import Image from "next/image";
import { PhotoProps } from "react-photo-album";

const Center = styled.div`
  display: block;
  margin: auto;
`;

const Width90Centered = styled(Center)`
  width: 90%;
  margin-bottom: 300px;
`;

const BildeHeader = styled(Header)`
  @media screen and (min-width: 769px) {
    margin-top: 47px;
    margin-bottom: 33px;
    margin-left: 193px;
  }
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
    blurDataUrl: img.lqip,
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
            renderPhoto={NextJsImage}
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

type Photo = {
  blurDataUrl: string;
  height: number;
  width: number;
  src: string;
  images: any[];
};

type NextJsImageProps = PhotoProps<Photo> & {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

const NextJsImage = ({ photo, imageProps, wrapperProps }: NextJsImageProps) => {
  const { width, height, blurDataUrl } = photo;
  const { src, alt, title, style, sizes, className, onClick } = imageProps;
  const { style: wrapperStyle, ...restWrapperProps } = wrapperProps ?? {};
  return (
    <div
      style={{
        width: style.width,
        padding: style.padding,
        marginBottom: style.marginBottom,
        ...wrapperStyle,
      }}
      {...restWrapperProps}
    >
      <Image
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        blurDataURL={blurDataUrl}
        width={width}
        height={height}
        className={className}
        onClick={onClick}
      />
    </div>
  );
};

import { FC } from "react";
import { SanityImage } from "../types/sanityTypes";
import { urlFor } from "../urlBuilder";
import { Swiper, SwiperSlide } from "swiper/swiper-react.cjs";
import SwiperCore, { Autoplay, EffectFade } from "swiper";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, EffectFade]);

type Props = {
  images: SanityImage[];
};

const ImageCarousel: FC<Props> = (props) => {
  const { images } = props;
  return (
    <Swiper effect="fade" autoplay speed={2500}>
      {images.map((image) => (
        <SwiperSlide key={image.name} style={{ height: "200px" }}>
          <img
            src={urlFor(image.imageUrl)
              .maxHeight(200)
              .width(1711)
              .fit("crop")
              .crop("focalpoint")
              .url()}
            alt={image.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;

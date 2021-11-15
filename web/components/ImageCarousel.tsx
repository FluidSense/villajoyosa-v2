import { FC } from "react";
import { SanityImage } from "../types/sanityTypes";
import { urlFor } from "../urlBuilder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

type Props = {
  images: SanityImage[];
};

const ImageCarousel: FC<Props> = (props) => {
  const { images } = props;
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay
      speed={2500}
    >
      {images.map((image) => (
        <SwiperSlide key={image.name} style={{ height: "200px" }}>
          <img
            src={urlFor(image.imageUrl).height(200).url()}
            alt={image.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;

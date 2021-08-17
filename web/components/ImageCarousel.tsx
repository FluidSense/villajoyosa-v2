import { FC } from "react";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import { SanityImage } from "../types/sanityTypes";
import style from "../styles/ImageCarousel.module.css";

type Props = {
  images: SanityImage[];
};

const ImageCarousel: FC<Props> = (props) => {
  const { images } = props;
  return (
    <Carousel
      className={style.carouselWrapper}
      showArrows={false}
      autoPlay={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      stopOnHover={false}
      swipeable={false}
      infiniteLoop={true}
      transitionTime="3000"
      animationHandler="fade"
    >
      {images.map((image) => (
        <img key={image.name} src={image.imageUrl} alt={image.name} />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

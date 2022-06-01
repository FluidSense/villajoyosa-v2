import styled from "@emotion/styled";
import {
  DesktopOnly,
  FullwidthImage,
  MobileOnly,
} from "components/NewDesign/common";
import { ImageAtStaticPosition } from "types/local";
import IntroductionText from "./IntroductionText";
import RentalButtons from "./RentalButtons";

const IngressWrapper = styled.section`
  margin: auto 8vw;
  font-size: 2.1rem;

  @media screen and (min-width: 769px) {
    margin: 0 0 0 5vw;
  }
`;

const FirstViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    margin-top: 138px;
    & > * {
      width: 50%;
    }
  }
`;

const BannerImage = styled(FullwidthImage)`
  max-height: 20vh;
  width: 100vw;
  @media screen and (min-width: 769px) {
    max-height: 238px;
  }
`;

const ActionButtonBackgroundImage = styled(FullwidthImage)`
  height: 190px;
  @media screen and (min-width: 769px) {
    border-radius: 17px;
    width: 90%;
    max-width: 738px;
    height: 347px;
    max-height: 65%;
    margin: 40px auto 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

type Props = {
  bannerImage?: ImageAtStaticPosition;
  actionImage?: ImageAtStaticPosition;
};

export default function Introduction({ bannerImage, actionImage }: Props) {
  const bannerImageUrl =
    bannerImage?.image?.imageUrl || "https://picsum.photos/id/1057/1920/747";
  const actionButtonImageUrl =
    actionImage?.image?.imageUrl || "https://picsum.photos/id/163/1920/740";
  return (
    <>
      <BannerImage
        alt={bannerImage.image.name}
        src={bannerImageUrl}
      ></BannerImage>
      <FirstViewWrapper>
        <IngressWrapper>
          <IntroductionText />
          <DesktopOnly>
            <RentalButtons />
          </DesktopOnly>
        </IngressWrapper>
        <section>
          <ActionButtonBackgroundImage
            alt={actionImage.image.name}
            src={actionButtonImageUrl}
          />
        </section>
      </FirstViewWrapper>
      <MobileOnly>
        <RentalButtons />
      </MobileOnly>
    </>
  );
}

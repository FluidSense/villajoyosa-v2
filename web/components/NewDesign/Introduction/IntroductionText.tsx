import styled from "@emotion/styled";
import Avatars from "./Avatars";

const SellingPointText = styled.span`
  color: #ff934f;
  animation-fill-mode: forwards;
  display: inline-block;
  @keyframes rotate-out-only {
    0%,
    80% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }
`;

const AnimatedSellingPoint = styled(SellingPointText)`
  position: absolute;
  opacity: 0;
  left: 0;

  @keyframes rotate {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }

    10%,
    80% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }

  @keyframes rotate-last {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }

    10%,
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const IntroHeader = styled.h1`
  margin-top: 24px;
  margin-bottom: 0;
  line-height: 1;
  position: relative;
  @media screen and (min-width: 769px) {
    margin-top: initial;
    width: 90%;
    font-size: 4rem;

    @media (prefers-reduced-motion: no-preference) {
      & > span {
        animation-name: rotate;
        animation-duration: 8s;
      }
      & > span:first-of-type {
        animation-name: "rotate-out-only";
      }
      & > span:nth-of-type(2) {
        animation-delay: 8s;
      }
      & > span:nth-of-type(3) {
        animation-delay: 16s;
      }
      & > span:nth-of-type(4) {
        animation-delay: 24s;
      }

      & > span:nth-of-type(5) {
        animation-delay: 32s;
        animation-name: "rotate-last";
        animation-fill-mode: forwards;
      }
    }
  }
`;

const IntroSubText = styled.p`
  margin-top: 16px;
  margin-bottom: 30px;
  font-size: 1rem;
  font-weight: bold;
  width: 237px;

  @media screen and (min-width: 769px) {
    font-size: 1.25rem;
    font-weight: normal;
    width: initial;
    margin-right: 36px;
    margin-top: 0;
  }
`;
const SubTextWithAvatars = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: 769px) {
    align-items: flex-start;
    margin-top: 10px;
  }
`;

export default function IntroductionText() {
  return (
    <>
      <IntroHeader>
        Nyt en ferie i Spania med
        <SellingPointText> sol på verandaen</SellingPointText>
        <AnimatedSellingPoint> lyden av bølgesus</AnimatedSellingPoint>
        <AnimatedSellingPoint> gamleby i gangavstand</AnimatedSellingPoint>
        <AnimatedSellingPoint> ferske bakevarer rett ved</AnimatedSellingPoint>
        <AnimatedSellingPoint> sol på verandaen</AnimatedSellingPoint>
      </IntroHeader>
      <SubTextWithAvatars>
        <IntroSubText>
          Vi leier ut vår toppleilighet i Villajoyosa, Spania
        </IntroSubText>
        <Avatars />
      </SubTextWithAvatars>
    </>
  );
}

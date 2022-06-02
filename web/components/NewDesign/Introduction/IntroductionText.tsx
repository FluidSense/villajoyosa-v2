import styled from "@emotion/styled";
import AnimatedSellingPoints from "./AnimatedSellingPoints";
import Avatars from "./Avatars";

const IntroHeader = styled.h1`
  margin-top: 24px;
  margin-bottom: 0;
  line-height: 1;
  position: relative;
  @media screen and (min-width: 1024px) {
    margin-top: initial;
    width: 90%;
    font-size: 4rem;

    @media (prefers-reduced-motion) {
      & > * {
        animation: none !important;
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

  @media screen and (min-width: 1024px) {
    font-size: 1.25rem;
    font-weight: normal;
    width: initial;
    width: 64%;
    margin-right: 2%;
    max-width: max-content;
    margin-top: 0;
  }
`;
const SubTextWithAvatars = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    margin-top: 10px;
  }
`;

export default function IntroductionText() {
  return (
    <>
      <IntroHeader>
        Nyt en ferie i Spania med
        <AnimatedSellingPoints />
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

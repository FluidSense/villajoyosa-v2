import styled from "@emotion/styled";
import Avatars from "./Avatars";

const SellingPointText = styled.span`
  color: #ff934f;
`;

const IntroHeader = styled.h1`
  margin-top: 24px;
  margin-bottom: 0;
  line-height: 1;
  @media screen and (min-width: 769px) {
    margin-top: initial;
    width: 90%;
    font-size: 4rem;
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

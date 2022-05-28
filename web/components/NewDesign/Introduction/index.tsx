import styled from "@emotion/styled";
import { FullwidthImage } from "components/NewDesign/common";
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
  max-height: 238px;
`;

const ActionButtonBackgroundImage = styled(FullwidthImage)`
  height: 190px;
  @media screen and (min-width: 769px) {
    border-radius: 17px;
    width: 738px;
    height: 347px;
    margin: 40px auto 0;
  }
`;

export default function Introduction() {
  return (
    <>
      <BannerImage src="https://picsum.photos/id/1057/1920/747"></BannerImage>
      <FirstViewWrapper>
        <IngressWrapper>
          <IntroductionText />
        </IngressWrapper>
        <section>
          <ActionButtonBackgroundImage src="https://picsum.photos/id/163/1920/740"></ActionButtonBackgroundImage>
        </section>
      </FirstViewWrapper>
      <RentalButtons />
    </>
  );
}

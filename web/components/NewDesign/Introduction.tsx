import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { IoArrowForward, IoChevronDown } from "react-icons/io5";
import { FullwidthImage } from "./common";

const IngressWrapper = styled.section`
  margin: auto 8vw;
  font-size: 2.1rem;

  @media screen and (min-width: 769px) {
    margin: 0 0 0 5vw;
  }
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

const SellingPointText = styled.span`
  color: #ff934f;
`;

const ActionButtonSection = styled.section`
  position: relative;
  top: -40px;
  border-radius: 7px;
  background-color: white;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 769px) {
    position: initial;
    flex-direction: row;
    margin-bottom: 181px;
  }
`;

const ButtonStyle = styled.button`
  text-align: center;
  border: none;
  border-radius: 7px;
  padding: 10px 60px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 5px;
  min-width: 338px;
`;

const MainButton = styled(ButtonStyle)`
  margin: 21px 0 0;
  background-color: #ff934f;
  @media screen and (min-width: 769px) {
    margin: initial;
    margin-right: 29px;
  }
`;

const SecondaryButton = styled(ButtonStyle)`
  margin: 13px 0;
  background-color: #646881;
  color: white;
`;

const scrollBaitTextStyle: CSSProperties = {
  fontWeight: "bold",
  margin: "0 auto",
  width: "80%",
  textAlign: "center",
};

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

const ReadMoreBelow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 769px) {
    display: none;
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

export default function Introduction() {
  return (
    <>
      <BannerImage src="https://picsum.photos/id/1057/1920/747"></BannerImage>
      <FirstViewWrapper>
        <IngressWrapper>
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
        </IngressWrapper>
        <section>
          <ActionButtonBackgroundImage src="https://picsum.photos/id/163/1920/740"></ActionButtonBackgroundImage>
        </section>
      </FirstViewWrapper>
      <ActionButtonSection>
        <MainButton>
          Se leiligheten på Airbnb <IoArrowForward />
        </MainButton>
        <SecondaryButton>
          Lei fra et lokalt utleiebyrå <IoArrowForward />
        </SecondaryButton>
        <ReadMoreBelow>
          <p style={scrollBaitTextStyle}>Eller les mer om leiligheten her</p>
          <IoChevronDown />
        </ReadMoreBelow>
      </ActionButtonSection>
    </>
  );
}

const CircularImage = styled.img`
  border-radius: 50%;
  width: 60px;
  @media screen and (min-width: 769px) {
    width: 70px;
  }
`;

const AvatarWrapper = styled.section`
  & img:first-of-type {
    margin-right: -16px;
  }
  @media screen and (min-width: 769px) {
    margin-top: 10px;
  }
`;

function Avatars() {
  return (
    <AvatarWrapper>
      <CircularImage src="https://a0.muscache.com/im/pictures/user/bb149374-a311-4e03-b353-371de25115ca.jpg?aki_policy=profile_large" />
      <CircularImage src="https://a0.muscache.com/im/pictures/user/0b905922-786a-490e-ad0f-fbf69dfbb5d5.jpg?aki_policy=profile_large" />
    </AvatarWrapper>
  );
}

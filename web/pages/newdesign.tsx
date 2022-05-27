import { CSSProperties, useEffect, useState } from "react";
import { IoArrowForward, IoChevronDown, IoWifi } from "react-icons/io5";
import { MdBalcony, MdOutlineBeachAccess } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { FaHandsWash } from "react-icons/fa";
import { PhotoAlbum } from "react-photo-album";
import styled from "@emotion/styled";

const IngressWrapper = styled.section`
  margin: auto 8vw;
  font-size: 2.1rem;

  @media screen and (min-width: 769px) {
    width: 538px;
    margin: 0 8vw;
  }
`;

const IntroHeader = styled.h1`
  margin-top: 24px;
  margin-bottom: 0;
  line-height: 1;
  @media screen and (min-width: 769px) {
    margin-top: initial;
  }
`;

const IntroSubText = styled.p`
  margin-top: 16px;
  margin-bottom: 30px;
  font-size: 1rem;
  font-weight: bold;
  padding-right: 2em;

  @media screen and (min-width: 769px) {
    font-size: 1.25rem;
    font-weight: normal;
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
  }
`;

const FullwidthImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: left;
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
    margin: 0 auto;
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

const SeparatorLine = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const LeilighetInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    & > * {
      width: 50%;
    }
  }
`;

export default function NewDesign() {
  return (
    <main>
      <BannerImage src="https://picsum.photos/id/1057/1920/747"></BannerImage>
      <FirstViewWrapper>
        <IngressWrapper>
          <IntroHeader>
            Nyt en ferie i Spania med
            <SellingPointText> sol på verandaen</SellingPointText>
          </IntroHeader>
          <IntroSubText>
            Vi leier ut vår toppleilighet i Villajoyosa, Spania
          </IntroSubText>
        </IngressWrapper>
        <ActionButtonBackgroundImage src="https://picsum.photos/id/163/1920/740"></ActionButtonBackgroundImage>
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
      <SeparatorLine />
      <LeilighetInfoWrapper>
        <VaarLeilighet />
        <LeilighetenHar />
      </LeilighetInfoWrapper>
      <Bilder />
    </main>
  );
}

/* Vår leilighet  */

const headerStyle: CSSProperties = {
  fontSize: "3rem",
  marginLeft: "21px",
  marginBottom: "20px",
};

const vaarLeilighetHeader: CSSProperties = {
  ...headerStyle,
  marginTop: 0,
};

const Header = styled.h2`
  font-size: 3rem;
  margin-left: 21px;
  margin-bottom: 20px;
`;

const VaarLeilighetHeader = styled(Header)`
  margin-top: 0;
  @media screen and (min-width: 769px) {
    margin-top: 47px;
    margin-bottom: 33px;
    margin-left: 193px;
  }
`;

const innholdsText: CSSProperties = {
  marginLeft: "34px",
  marginBottom: "28px",
  marginRight: "24px",
};

const InnholdsText = styled.p`
  margin-left: 34px;
  margin-bottom: 28px;
  margin-right: 24px;
  @media screen and (min-width: 769px) {
    margin-left: 134px;
    width: 60%;
  }
`;

const VaarLeilighetImage = styled(FullwidthImage)`
  height: 170px;
  object-position: center;
  @media screen and (min-width: 769px) {
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: block;
    margin: auto;
    width: 70%;
    margin-top: 76px;
    height: 307px;
  }
`;

const InnerSeparatorLine = styled.div`
  @media screen and (min-width: 769px) {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
const NextSectionSeparatorLine = styled(InnerSeparatorLine)`
  @media screen and (min-width: 769px) {
    margin: auto;
    margin-top: 78px;
    width: 80%;
  }
`;

function VaarLeilighet() {
  return (
    <section>
      <VaarLeilighetHeader>Vår leilighet</VaarLeilighetHeader>
      <InnholdsText>
        Vi leigar ut ei penthouse-leilighet i 14. etasje med utsikt over
        Middelhavet og byen Villajoyosa. Med glassfasade ut mot den luftige
        takterrassen får du sol mesteparten av dagen. Leiligheta ligg på toppen
        av bygården &quot;Torre Colon&quot;, som tyder Columbus-tårnet. Den ligg
        sentralt i gata Calle Colon, med knappe 5 min å gå til hovedstranda,
        Playa Centro. Der kan ein leiga solseng og parasoll heile dagen, til kl
        19 om kvelden.
      </InnholdsText>
      <VaarLeilighetImage src="https://picsum.photos/id/225/1920/170"></VaarLeilighetImage>
      <NextSectionSeparatorLine />
    </section>
  );
}

/* Leiligheten har  */
const tingViHarStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const LeilighetenHarStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  margin-left: 30px;
  @media screen and (min-width: 769px) {
    margin-top: 48px;
  }
`;

const LeilighetenHarWrapper = styled.article`
  @media screen and (min-width: 769px) {
    width: 70%;
    border-radius: 17px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #eeecec;
    padding: 59px;
    margin: auto;
  }
`;

const LeilighetenHarHeader = styled(Header)`
  @media screen and (min-width: 769px) {
    margin-top: 0;
  }
`;

const LeilighetenHarHalfPageSize = styled.section`
  @media screen and (min-width: 769px) {
    align-self: center;
  }
`;

function LeilighetenHar() {
  return (
    <LeilighetenHarHalfPageSize>
      <LeilighetenHarWrapper>
        <LeilighetenHarHeader>Leiligheten har</LeilighetenHarHeader>
        <InnerSeparatorLine />
        <LeilighetenHarStyle>
          <article style={tingViHarStyle}>
            <IoWifi size={24} />
            <p>WiFi</p>
          </article>
          <article style={tingViHarStyle}>
            <MdBalcony size={24} /> <p>Privat veranda</p>
          </article>
          <article style={tingViHarStyle}>
            <BsArrowRepeat size={24} />
            <p>Aircondition</p>
          </article>
          <article style={tingViHarStyle}>
            <MdOutlineBeachAccess size={24} />
            <p>Strandtilgang</p>
          </article>
          <article style={tingViHarStyle}>
            <FaHandsWash size={24} />
            <p>Oppvaskmaskin</p>
          </article>
        </LeilighetenHarStyle>
      </LeilighetenHarWrapper>
    </LeilighetenHarHalfPageSize>
  );
}

/* Bilder */

const BildeHeader = styled(VaarLeilighetHeader)``;

const MobileOnly = styled.div`
  display: initial;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const DesktopOnly = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: initial;
  }
`;

const Center = styled.div`
  display: block;
  margin: auto;
`;

const Width90Centered = styled(Center)`
  width: 90%;
  margin-bottom: 300px;
`;

function Bilder() {
  const [photos, setPhotos] =
    useState<{ src: string; height: number; width: number }[]>();

  useEffect(() => {
    const generatedPhotos = Array.from(Array(15).keys()).map(() => {
      const randHeight = Math.floor(Math.random() * 100 + 100);
      const randWidth = Math.floor(Math.random() * 314 + 100);
      return {
        src: `https://picsum.photos/${randWidth}/${randHeight}`,
        height: randHeight,
        width: randWidth,
      };
    });
    setPhotos(generatedPhotos);
  }, []);
  return (
    <>
      <BildeHeader>Bilder</BildeHeader>
      <MobileOnly>
        <PhotoAlbum layout="columns" photos={photos} columns={2} />
      </MobileOnly>
      <DesktopOnly>
        <Width90Centered>
          <PhotoAlbum layout="rows" photos={photos} targetRowHeight={200} />
        </Width90Centered>
      </DesktopOnly>
    </>
  );
}

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
  }
`;

const IntroHeader = styled.h1`
  margin-top: 24px;
  margin-bottom: 0;
  line-height: 1;
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
    width: 40%;
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
        <ActionButtonBackgroundImage src="https://picsum.photos/id/163/1920/190"></ActionButtonBackgroundImage>
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
      <VaarLeilighet />
      <LeilighetenHar />
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

const innholdsText: CSSProperties = {
  marginLeft: "34px",
  marginBottom: "28px",
  marginRight: "24px",
};

const VaarLeilighetImage = styled(FullwidthImage)`
  height: 170px;
  object-position: center;
`;

function VaarLeilighet() {
  return (
    <>
      <h2 style={vaarLeilighetHeader}>Vår leilighet</h2>
      <p style={innholdsText}>
        Vi leigar ut ei penthouse-leilighet i 14. etasje med utsikt over
        Middelhavet og byen Villajoyosa. Med glassfasade ut mot den luftige
        takterrassen får du sol mesteparten av dagen. Leiligheta ligg på toppen
        av bygården &quot;Torre Colon&quot;, som tyder Columbus-tårnet. Den ligg
        sentralt i gata Calle Colon, med knappe 5 min å gå til hovedstranda,
        Playa Centro. Der kan ein leiga solseng og parasoll heile dagen, til kl
        19 om kvelden.
      </p>
      <VaarLeilighetImage src="https://picsum.photos/id/225/1920/170"></VaarLeilighetImage>
    </>
  );
}

const tingViHarStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const leilighetenHarStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "start",
  marginLeft: "30px",
};

/* Leiligheten har  */
function LeilighetenHar() {
  return (
    <>
      <h2 style={headerStyle}>Leiligheten har</h2>
      <section style={leilighetenHarStyle}>
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
      </section>
    </>
  );
}

/* Bilder */

function Bilder() {
  const [photos, setPhotos] =
    useState<{ src: string; height: number; width: number }[]>();

  useEffect(() => {
    const generatedPhotos = Array.from(Array(15).keys()).map((index) => {
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
      <h2 style={headerStyle}>Bilder</h2>
      <PhotoAlbum layout="columns" photos={photos} columns={2} />
    </>
  );
}

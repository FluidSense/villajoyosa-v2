import { CSSProperties, useEffect, useState } from "react";
import { IoArrowForward, IoChevronDown, IoWifi } from "react-icons/io5";
import { MdBalcony, MdOutlineBeachAccess } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { FaHandsWash } from "react-icons/fa";
import { PhotoAlbum } from "react-photo-album";
import styled from "styled-components";
const trekkplasterStyle: CSSProperties = {
  color: "#FF934F",
};

const ingressStyle: CSSProperties = {
  margin: "auto 8vw",
  fontSize: "2.1rem",
};

const introTextStyle: CSSProperties = {
  marginTop: "24px",
  marginBottom: "0",
};

const introSubTextStyle: CSSProperties = {
  marginTop: "16px",
  marginBottom: "30px",
  fontSize: "1rem",
  fontWeight: "bold",
};

const buttonWrapperStyle: CSSProperties = {
  position: "relative",
  top: "-40px",
  borderRadius: "7px",
  backgroundColor: "white",
  width: "90%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const buttonStyle: CSSProperties = {
  textAlign: "center",
  border: "none",
  borderRadius: "7px",
  padding: "10px 60px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  gap: "5px",
  minWidth: "338px",
};

const mainButtonStyle: CSSProperties = {
  ...buttonStyle,
  margin: "21px 0 0",
  backgroundColor: "#FF934F",
};

const secondaryButtonStyle: CSSProperties = {
  ...buttonStyle,
  margin: "13px 0",
  backgroundColor: "#646881",
  color: "white",
};

const scrollBaitTextStyle: CSSProperties = {
  fontWeight: "bold",
  margin: "0 auto",
  width: "80%",
  textAlign: "center",
};

const bannerBildeStyle: CSSProperties = {
  width: "100%",
  maxHeight: "161px",
  objectFit: "cover",
  objectPosition: "left",
};

const FullwidthImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: left;
`;

const BannerImage = styled(FullwidthImage)`
  max-height: 161px;
`;

const ActionButtonBackgroundImage = styled(FullwidthImage)`
  height: 190px;
`;

export default function NewDesign() {
  return (
    <main>
      <BannerImage src="https://picsum.photos/id/1057/1920/747"></BannerImage>
      <section style={ingressStyle}>
        <h1 style={introTextStyle}>
          Nyt en ferie i Spania med
          <span style={trekkplasterStyle}> sol på verandaen</span>
        </h1>
        <p style={introSubTextStyle}>
          Vi leier ut vår toppleilighet i <br />
          Villajoyosa, Spania
        </p>
      </section>
      <ActionButtonBackgroundImage src="https://picsum.photos/id/163/1920/190"></ActionButtonBackgroundImage>
      <div style={buttonWrapperStyle}>
        <button style={mainButtonStyle}>
          Se leiligheten på Airbnb <IoArrowForward />
        </button>
        <button style={secondaryButtonStyle}>
          Lei fra et lokalt utleiebyrå <IoArrowForward />
        </button>
        <p style={scrollBaitTextStyle}>Eller les mer om leiligheten her</p>
        <IoChevronDown />
      </div>
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

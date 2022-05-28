import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { FaHandsWash } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { MdBalcony, MdOutlineBeachAccess } from "react-icons/md";
import { Header } from "./common";

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

export const InnerSeparatorLine = styled.div`
  @media screen and (min-width: 769px) {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default function LeilighetenHar() {
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

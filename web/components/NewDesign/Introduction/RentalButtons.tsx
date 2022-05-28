import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { IoArrowForward, IoChevronDown } from "react-icons/io5";

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

const ReadMoreBelow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const scrollBaitTextStyle: CSSProperties = {
  fontWeight: "bold",
  margin: "0 auto",
  width: "80%",
  textAlign: "center",
};

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

export default function RentalButtons() {
  return (
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
  );
}
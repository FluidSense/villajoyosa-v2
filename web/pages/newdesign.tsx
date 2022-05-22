import { CSSProperties } from "react";

const trekkplasterStyle: CSSProperties = {
  color: "#FF934F",
};

const ingressStyle: CSSProperties = {
  margin: "auto 34px",
  fontSize: "2.1rem",
  marginBottom: "0",
};

const introTextStyle: CSSProperties = {
  marginTop: "24px",
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
  width: "90%",
  textAlign: "center",
  border: "none",
  borderRadius: "7px",
  padding: "10px",
  fontWeight: "bold",
  display: "block",
  fontSize: "1rem",
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

export default function NewDesign() {
  return (
    <main>
      <img src="https://picsum.photos/id/1057/414/161"></img>
      <section style={ingressStyle}>
        <h1 style={introTextStyle}>
          Nyt en ferie i Spania med
          <span style={trekkplasterStyle}> sol på verandaen</span>
        </h1>
        <p style={introSubTextStyle}>
          Vi leier ut vår toppleilighet i Villajoyosa, Spania
        </p>
      </section>
      <img src="https://picsum.photos/id/163/414/190"></img>
      <div style={buttonWrapperStyle}>
        <button style={mainButtonStyle}>Se leiligheten på Airbnb -{">"}</button>
        <button style={secondaryButtonStyle}>
          Lei fra et lokalt utleiebyrå -{">"}
        </button>
        <p style={scrollBaitTextStyle}>Eller les mer om leiligheten her</p>
        <p style={scrollBaitTextStyle}>v</p>
      </div>
    </main>
  );
}

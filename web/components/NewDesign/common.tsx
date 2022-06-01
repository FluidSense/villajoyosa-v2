import styled from "@emotion/styled";

export const Header = styled.h2`
  font-size: 3rem;
  margin-left: 21px;
  margin-bottom: 20px;
`;

export const FullwidthImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: left;
`;

export const Page = styled.section`
  @media screen and (min-width: 1024px) {
    min-height: 90vh;
  }
`;

export const MobileOnly = styled.div`
  display: initial;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const DesktopOnly = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: initial;
  }
`;

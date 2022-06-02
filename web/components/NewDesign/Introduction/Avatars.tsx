import styled from "@emotion/styled";

const CircularImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  @media screen and (min-width: 1024px) {
    height: 70px;
    width: 70px;
  }
`;

const AvatarWrapper = styled.section`
  & img:first-of-type {
    margin-right: -15%;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 10px;
  }
`;

export default function Avatars() {
  return (
    <AvatarWrapper>
      <CircularImage
        alt="Johannes Kvamme"
        src="https://a0.muscache.com/im/pictures/user/bb149374-a311-4e03-b353-371de25115ca.jpg?aki_policy=profile_large"
      />
      <CircularImage
        alt="Frida Kvamme"
        src="https://a0.muscache.com/im/pictures/user/0b905922-786a-490e-ad0f-fbf69dfbb5d5.jpg?aki_policy=profile_large"
      />
    </AvatarWrapper>
  );
}

import styled from "@emotion/styled";
import { Header as BaseHeader } from "./common";
import { MainButton } from "./Introduction/RentalButtons";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px;
  width: 90%;
  & > * {
    border-radius: 3px;
  }
  & > input,
  textarea {
    border: 1px solid silver;
    margin-top: 5px;
    padding: 5px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    @media screen and (min-width: 769px) {
      width: 40%;
    }
  }
  & > input {
    width: 50%;
    @media screen and (min-width: 769px) {
      width: 20%;
    }
  }
  & > label {
    margin-top: 20px;
  }
  & > label:first-of-type {
    margin-top: 0;
  }
`;

const Beskrivelse = styled.p`
  width: 90%;
  margin: auto auto 20px;
`;

const SendButton = styled(MainButton)`
  @media screen and (min-width: 769px) {
    margin-top: 20px;
  }
`;

const TextArea = styled.textarea`
  height: 15vh;
  font-size: small;
  @media screen and (min-width: 769px) {
    height: 20vh;
  }
`;

const Header = styled(BaseHeader)`
  @media screen and (min-width: 769px) {
    margin-top: 47px;
    margin-bottom: 33px;
    margin-left: 193px;
  }
`;

const HoneypotField = styled.p`
  visibility: hidden;
  position: absolute;
`;

export default function KontaktOss() {
  return (
    <section>
      <Header id="kontakt-oss">Kontakt oss</Header>
      <Beskrivelse>
        Vi ønsker i utgangspunktet alle nye utleieforespørsler via Airbnb.
        <br /> Har du andre spørsmål eller har leid fra oss før, ta kontakt med
        oss her!
      </Beskrivelse>
      <Form
        name="Kontaktskjema"
        method="POST"
        data-netlify
        data-netlify-honeypot="bot-field"
      >
        <HoneypotField>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </HoneypotField>
        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="navn" required />
        <label htmlFor="message">Melding</label>
        <TextArea id="message" name="melding"></TextArea>
        <SendButton as="button" type="submit">
          Send
        </SendButton>
      </Form>
    </section>
  );
}

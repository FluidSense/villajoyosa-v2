/* Vår leilighet  */

import styled from "@emotion/styled";
import { ImageAtStaticPosition } from "types/local";
import { FullwidthImage, Header } from "./common";
import { InnerSeparatorLine } from "./LeilighetenHar";

export const VaarLeilighetHeader = styled(Header)`
  margin-top: 0;
  @media screen and (min-width: 769px) {
    margin-top: 47px;
    margin-bottom: 33px;
    margin-left: 193px;
  }
`;

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

type Props = {
  image?: ImageAtStaticPosition;
};

export default function VaarLeilighet({ image }: Props) {
  const imageUrl =
    image?.image?.imageUrl || "https://picsum.photos/id/225/1920/170";
  return (
    <section>
      <VaarLeilighetHeader id="vaar-leilighet">
        Vår leilighet
      </VaarLeilighetHeader>
      <InnholdsText>
        Vi leigar ut ei penthouse-leilighet i 14. etasje med utsikt over
        Middelhavet og byen Villajoyosa. Med glassfasade ut mot den luftige
        takterrassen får du sol mesteparten av dagen. Leiligheta ligg på toppen
        av bygården &quot;Torre Colon&quot;, som tyder Columbus-tårnet. Den ligg
        sentralt i gata Calle Colon, med knappe 5 min å gå til hovedstranda,
        Playa Centro. Der kan ein leiga solseng og parasoll heile dagen, til kl
        19 om kvelden.
      </InnholdsText>
      <VaarLeilighetImage alt={image.image.name} src={imageUrl} />
    </section>
  );
}

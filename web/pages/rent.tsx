import { NextPageContext } from "next";
import BlockContentWithSerializers from "../components/BlockContentWithSerializers";
import client from "../sanityClient";
import { TextBlock } from "../types/local";
import styles from "../styles/Home.module.css";

type Props = {
  textContent: TextBlock[];
};

const Rent: React.FC<Props> = (props) => {
  const { textContent } = props;
  return (
    <section className={styles.section}>
      <BlockContentWithSerializers blocks={textContent[0].text} />
    </section>
  );
};

export default Rent;

export async function getStaticProps(
  context: NextPageContext
): Promise<{ props: Props }> {
  const textContentQuery = '*[_type == "content" && displayPage == "rent"]';
  const textContent = await client.fetch(textContentQuery);

  return {
    props: {
      textContent,
    },
  };
}

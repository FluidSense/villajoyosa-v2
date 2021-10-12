import DynamicIcon from "./DynamicIcon";
import { TextWithIcon } from "../types/local";
import styles from "../styles/Amenities.module.css";

const TextWithIconComponent: React.FC<TextWithIcon> = (textWithIcon) => {
  const { text, icon } = textWithIcon;
  return (
    <article className={styles.amenity} key={text}>
      <DynamicIcon name={icon.name} provider={icon.provider} />
      <p>{text}</p>
    </article>
  );
};

export default TextWithIconComponent;

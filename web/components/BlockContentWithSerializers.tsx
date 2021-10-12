import TextWithIconComponent from "./TextWithIcon";
import BlockContent, {
  BlockContentProps,
} from "@sanity/block-content-to-react";

const serializers = {
  types: {
    textWithIcon: function textWithIconCreator(props) {
      return (
        <TextWithIconComponent icon={props.node.icon} text={props.node.text} />
      );
    },
  },
};

const BlockContentWithSerializers: React.FC<BlockContentProps> = (props) => (
  <BlockContent serializers={serializers} {...props} />
);

export default BlockContentWithSerializers;

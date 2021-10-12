import TextWithIconComponent from "./TextWithIcon";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    textWithIcon: (props) => (
      <TextWithIconComponent icon={props.node.icon} text={props.node.text} />
    ),
  },
};

const BlockContentWithSerializers = (props) => (
  <BlockContent serializers={serializers} {...props} />
);

export default BlockContentWithSerializers;

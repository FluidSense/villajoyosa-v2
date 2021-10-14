import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as SanityIcons from "@sanity/icons";

type IconComponent = (name: string) => React.Component;

const DynamicFontAwesomeIcon: IconComponent = (name) => FaIcons[name];
const DynamicMaterialDesignIcon: IconComponent = (name) =>
  MdIcons["Md" + capitalizeFirstLetter(name)];
const DynamicSanityIcon: IconComponent = (name) => SanityIcons[name];

const Providers = {
  fa: DynamicFontAwesomeIcon,
  mdi: DynamicMaterialDesignIcon,
  sa: DynamicSanityIcon,
};

const DynamicIcon = ({
  name,
  provider,
}: {
  name: string;
  provider: string;
}) => {
  const providerIcons = Providers[provider];
  const Icon = providerIcons(name);
  if (!Icon) return <></>;
  return <Icon />;
};

export default DynamicIcon;

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

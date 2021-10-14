import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as SanityIcons from "@sanity/icons";

type IconComponent = (name: string) => React.Component;

const DynamicFontAwesomeIcon: IconComponent = (name) => FaIcons[name];
const DynamicMaterialDesignIcon: IconComponent = (name) =>
  name.startsWith("Md")
    ? MdIcons[name]
    : MdIcons["Md" + capitalizeFirstLetter(name)];
const DynamicSanityIcon: IconComponent = (name) => SanityIcons[name];
const DynamicFeatherIcon: IconComponent = (name) => FiIcons[name];
const DynamicHeroIcon: IconComponent = (name) => HiIcons[name];

const Providers = {
  fa: DynamicFontAwesomeIcon,
  mdi: DynamicMaterialDesignIcon,
  sa: DynamicSanityIcon,
  fi: DynamicFeatherIcon,
  hi: DynamicHeroIcon,
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

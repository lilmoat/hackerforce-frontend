import { FC } from "react";
import { Icons, IconName } from "./Icons/Icons";

interface Props {
  name: IconName;
  size?: number;
  className?: string;
}

const Icon: FC<Props> = ({ name, size = 24, className }) => {
  const SvgIcon = Icons[name];
  return SvgIcon ? <SvgIcon size={size} className={className} /> : null;
};

export default Icon;

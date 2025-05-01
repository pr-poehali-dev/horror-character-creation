
import * as React from "react";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

export interface IconProps extends LucideProps {
  name: keyof typeof LucideIcons;
  fallback?: keyof typeof LucideIcons;
}

const Icon: React.FC<IconProps> = ({ name, fallback = "CircleAlert", ...props }) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];
  return <IconComponent {...props} />;
};

export default Icon;

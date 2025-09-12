import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

function IconButton({
  icon,
  label,
  scale = "scale-100",
  color = "text-muted-foreground",
  accent = "text-accent-foreground",
  hover = "hover:text-foreground",
  filled = true,
  selected = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconName;
  label: string;
  scale?: string;
  color?: string;
  hover?: string;
  accent?: string;
  filled?: boolean;
  selected?: boolean;
}) {
  const solidIcon: IconProp = ["fas", icon];
  const regIcon: IconProp = ["far", icon];

  return (
    <Button
      variant="link"
      className={`${
        selected ? accent : color
      } ${hover} ${scale} font-normal text-xl gap-1.5`}
      {...props}
    >
      {selected || filled ? (
        <FontAwesomeIcon icon={solidIcon} color={color} size="xs" />
      ) : (
        <FontAwesomeIcon icon={regIcon} color={color} size="xs" />
      )}
      {label}
    </Button>
  );
}

export default IconButton;

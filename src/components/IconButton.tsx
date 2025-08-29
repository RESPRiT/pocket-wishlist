import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";

function IconButton({
  icon,
  label,
  color = "text-muted-foreground",
  accent = "text-accent-foreground",
  hover = "hover:text-foreground",
  selected = false,
}: {
  icon: IconName;
  label: string;
  color?: string;
  hover?: string;
  accent?: string;
  selected?: boolean;
  filled?: boolean;
}) {
  const solidIcon: IconProp = ["fas", icon];
  const regIcon: IconProp = ["far", icon];

  return (
    <Button
      variant="link"
      className={`${selected ? accent : color} ${hover} font-normal text-xl`}
    >
      {selected ? (
        <FontAwesomeIcon icon={solidIcon} color={color} size="xs" />
      ) : (
        <FontAwesomeIcon icon={regIcon} color={color} size="xs" />
      )}
      {label}
    </Button>
  );
}

export default IconButton;

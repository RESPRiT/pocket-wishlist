export type HeaderType = "year" | "tier" | "price";

interface ListHeaderProps {
  type: HeaderType;
  label: string;
}

function ListHeader({ type: _type, label }: ListHeaderProps) {
  return (
    <div className="w-full items-center text-sm font-medium text-gray-600">
      {label}
    </div>
  );
}

export default ListHeader;

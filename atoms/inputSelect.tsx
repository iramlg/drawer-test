import { Select, SelectItem } from "@heroui/select";

export interface InputSelectProps {
  label: string;
  placeholder: string;
  options: string[];
}

export default function InputSelect({
  label,
  placeholder,
  options,
}: InputSelectProps): JSX.Element {
  return (
    <Select
      classNames={{
        base: "bg-background w-full",
        trigger: [
          "bg-transparent",
          "border-none",
          "shadow-none",
          "hover:bg-transparent",
          "data-[hover=true]:bg-transparent",
          "data-[focus=true]:bg-transparent",
          "data-[open=true]:bg-transparent",
          "p-0",
          "w-full",
        ],
        innerWrapper: "w-full",
        value: "text-lg",
        popoverContent: "bg-background border border-default-200",
        label: "text-lg font-medium",
        listbox: "bg-background ",
      }}
      label={label}
      placeholder={placeholder}
      variant="flat"
    >
      {options.map((opt) => (
        <SelectItem key={opt}>{opt}</SelectItem>
      ))}
    </Select>
  );
}

import { Input } from "@heroui/input";

export interface InputTextProps {
  label: string;
  placeholder: string;
}

export default function InputText({
  label,
  placeholder,
}: InputTextProps): JSX.Element {
  return (
    <Input
      classNames={{
        base: "bg-transparent",
        input: "bg-transparent text-lg",
        label: "text-lg font-medium",
        inputWrapper: [
          "bg-transparent",
          "border-none",
          "shadow-none",
          "hover:bg-transparent",
          "group-data-[focus=true]:bg-transparent",
          "group-data-[hover=true]:bg-transparent",
          "data-[hover=true]:bg-transparent",
          "p-0",
        ],
      }}
      label={label}
      placeholder={placeholder}
      type="text"
      variant="flat"
    />
  );
}

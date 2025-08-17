import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

export interface CardDropdownProps {
  title: string;
  subtitle: string;
}

export default function CardDropdown({
  title,
  subtitle,
}: CardDropdownProps): JSX.Element {
  return (
    <Card className="border-solid bg-background w-full border-gray-200 hover:border-black border-1 mb-4">
      <CardBody className="flex flex-row items-center">
        <div className="p-3 bg-primary-50 rounded-md mr-4">
          <Avatar alt="connectors" className="w-6 h-6" src="/connectors.svg" />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-foreground-50">{subtitle}</p>
        </div>
      </CardBody>
    </Card>
  );
}

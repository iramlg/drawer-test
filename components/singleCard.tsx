import { Card, CardBody } from "@heroui/card";

import { PlusIcon } from "@/components/icons";

export interface SingleCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function SingleCard({
  title,
  description,
  onClick = () => {},
}: SingleCardProps): JSX.Element {
  return (
    <Card
      disableAnimation
      isPressable
      className="border-solid bg-background w-full cursor-pointer border-gray-200 hover:border-black border-1 mb-4"
      onPress={() => {
        onClick();
      }}
    >
      <CardBody className="flex justify-between flex-row items-end">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-foreground-50">{description}</p>
        </div>
        <PlusIcon className="" size={32} />
      </CardBody>
    </Card>
  );
}

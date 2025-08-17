import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

import InputText from "@/atoms/inputText";
import InputSelect from "@/atoms/inputSelect";

export default function CardGroup(): JSX.Element {
  return (
    <Card className="border-solid bg-background border-gray-200 border-1 mb-4">
      <CardBody className="flex justify-between flex-row items-end">
        <InputText label="Name *" placeholder="Enter the name of the test" />
      </CardBody>
      <Divider />
      <CardBody className="flex justify-between flex-row items-end">
        <InputText
          label="Description *"
          placeholder="Add information about the test"
        />
      </CardBody>
      <Divider />
      <CardBody className="flex justify-between flex-row items-end">
        <InputSelect
          label="Group"
          options={["Group 1", "Group 2", "Group 3"]}
          placeholder="Add your test to a group"
        />
      </CardBody>
    </Card>
  );
}

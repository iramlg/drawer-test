import { RadioGroup, Radio } from "@heroui/radio";
import clsx from "clsx";

import { MockTagIcon } from "@/components/icons";

export interface CustomRadioProps {
  value: string;
  children: React.ReactNode;
}

const CustomRadio = (props: CustomRadioProps): JSX.Element => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: clsx(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[100%] cursor-pointer rounded-lg gap-4 p-4 border-2 border-default-50",
          "data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default function MockGroup({
  onChange,
}: {
  onChange: (val: string) => void;
}): JSX.Element {
  return (
    <RadioGroup onValueChange={(val) => onChange(val)}>
      <CustomRadio value="1">
        <div className="flex flex-row gap-1">
          <div className="p-3 bg-primary-50 rounded-md mr-4">
            <MockTagIcon size={24} />
          </div>
          <div className="">
            <p>
              Mocked response name #1{" "}
              <span className="text-foreground-50">(1)</span>
            </p>
            <p className="text-foreground-50">Created at 10 dec, 2024</p>
          </div>
        </div>
      </CustomRadio>
      <CustomRadio value="2">
        <div className="flex flex-row gap-1">
          <div className="p-3 bg-primary-50 rounded-md mr-4">
            <MockTagIcon size={24} />
          </div>
          <div className="">
            <p>
              Mocked response name #2{" "}
              <span className="text-foreground-50">(2)</span>
            </p>
            <p className="text-foreground-50">Created at 2 dec, 2024</p>
          </div>
        </div>
      </CustomRadio>
    </RadioGroup>
  );
}

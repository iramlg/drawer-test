"use client";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { useDisclosure } from "@heroui/use-disclosure";
import { Avatar } from "@heroui/avatar";
import { Select, SelectItem } from "@heroui/select";

import { BackIcon, SysIcon } from "@/components/icons";
import MockGroup from "@/components/mockGroup";
import { Title, SubTitle } from "@/atoms/typographyItems";
import { useMock } from "@/context/DataContext";

export interface MockResponsesProps {
  show: boolean;
  onClose: () => void;
}

type SelectItemType = {
  id: string | number;
  label: string;
  icon: string;
  isInfo?: boolean | null;
};

type SelectedValueType = SelectItemType | null;
type mockedValueType = string | null;

const mockItems = [
  {
    id: 1,
    label: "Session Management",
    icon: "connectors",
  },
  {
    id: 2,
    label: "Rest V2 (HTTP / APIs)",
    icon: "step",
  },
  {
    id: 3,
    label: "Session Management",
    icon: "connectors",
  },
  {
    id: 4,
    label: "Transformer (JOLT)",
    icon: "pipeline",
  },
  {
    id: "info",
    label: "You can select the step by clicking on canvas",
    icon: "light",
    isInfo: true,
  },
];

export default function MockResponses({
  show,
  onClose: onCloseMock = () => {},
}: MockResponsesProps): JSX.Element {
  const { setMockData } = useMock();
  const { isOpen, onOpenChange } = useDisclosure({ isOpen: show });
  const [selected, setSelected] = useState<SelectedValueType>(null);
  const [mockedSelected, setMockSelected] = useState<mockedValueType>(null);

  useEffect(() => {
    return () => {
      setSelected(null);
      setMockSelected(null);
    };
  }, []);

  return (
    <>
      <Drawer
        backdrop="transparent"
        classNames={{
          base: "bg-background",
        }}
        hideCloseButton={true}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="xl"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex justify-between gap-1">
                <Button
                  isIconOnly
                  className="data-[hover=true]:bg-transparent"
                  variant="light"
                  onPress={onCloseMock}
                >
                  <BackIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                </Button>
                <SysIcon className="mt-2" />
              </DrawerHeader>
              <DrawerBody className="p-0">
                <div className="p-5">
                  <Title>Mock Response</Title>
                  <SubTitle>
                    You can choose a connector to simulate the response.
                  </SubTitle>
                  <Select
                    className="w-full"
                    classNames={{
                      listbox: "bg-background",
                      label: "group-data-[filled=true]:hidden",
                      innerWrapper: "group-data-[has-label=true]:pt-0",
                    }}
                    disabledKeys={["info"]}
                    label="Choose a step to mock..."
                    renderValue={(items) => {
                      if (!items || items.length === 0 || !selected) {
                        return null; // This will show the placeholder
                      }

                      return (
                        <div className="flex items-center gap-2">
                          <Avatar
                            alt={selected.label}
                            className="w-6 h-6"
                            src={`/${selected.icon}.svg`}
                          />
                          <span className="text-foreground">
                            {selected.label}
                          </span>
                        </div>
                      );
                    }}
                    variant="bordered"
                    onChange={(a) => {
                      let current = mockItems.find(
                        (item) => item.id == a.target.value,
                      );

                      if (current?.id === 3) {
                        setSelected(current ?? null);
                      } else {
                        setSelected(null);
                      }
                    }}
                  >
                    {mockItems.map((item) => (
                      <SelectItem
                        key={item.id}
                        className={
                          item.isInfo
                            ? "pt-2 pb-2 border-t-1 rounded-none border-default-200"
                            : "mt-1 mb-1"
                        }
                        startContent={
                          <Avatar
                            alt={item.label}
                            className="w-6 h-6"
                            src={`/${item.icon}.svg`}
                          />
                        }
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <Divider />
                {selected ? (
                  <div className="p-5">
                    <MockGroup onChange={(val) => setMockSelected(val)} />
                  </div>
                ) : (
                  <div className="p-5 flex flex-col gap-2 items-center">
                    <div className="p-2 bg-primary-50 rounded-md">
                      <img alt="git commit" src="/git-commit.png" />
                    </div>
                    <p className="p-30 pt-5 pb-5 text-foreground text-lg text-center">
                      Choose a step to see saved mocked responses.
                    </p>
                  </div>
                )}
              </DrawerBody>

              <DrawerFooter className="flex">
                <Button
                  className="w-full"
                  color="primary"
                  isDisabled={!mockedSelected}
                  variant="bordered"
                  onPress={() => {
                    setMockData({
                      id: mockedSelected || "",
                      title: `Mock name #${mockedSelected}`,
                      subTitle: "Session Management",
                    });
                    onCloseMock();
                  }}
                >
                  Apply
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

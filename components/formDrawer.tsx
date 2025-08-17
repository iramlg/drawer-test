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
import { useDisclosure } from "@heroui/use-disclosure";
import { Switch } from "@heroui/switch";

import { CloseIcon, SysIcon } from "@/components/icons";
import MockResponses from "@/components/mockResponses";
import { useMock } from "@/context/DataContext";
import SingleCard from "@/components/singleCard";
import CardDropdown from "@/components/cardDropdown";
import { Title, SubTitle, CardTitle } from "@/atoms/typographyItems";
import CardGroup from "@/components/cardGroup";

export default function FormDrawer() {
  const { mockData, setMockData } = useMock();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showMockResponses, setShowMockResponses] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setMockData(null);
    }
  }, [isOpen]);

  return (
    <>
      <Button color="primary" variant="bordered" onPress={onOpen}>
        Open Drawer
      </Button>
      <Drawer
        backdrop="transparent"
        classNames={{}}
        hideCloseButton={true}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="xl"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <div className="bg-background flex flex-col h-full ">
              <DrawerHeader className="flex justify-between gap-1">
                <Button
                  isIconOnly
                  className="data-[hover=true]:bg-transparent"
                  variant="light"
                  onPress={onClose}
                >
                  <CloseIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                </Button>
                <SysIcon className="mt-2" />
              </DrawerHeader>
              <DrawerBody>
                <Title>Create a test case</Title>
                <SubTitle>
                  Define your coverage area and use tools to simulate the
                  desired paths.
                </SubTitle>
                <div>
                  <div className="flex justify-between">
                    <CardTitle>DEFINE PATH</CardTitle>
                    <div className="flex flex-row gap-2 flex-row items-center mb-2">
                      <p className="font-semibold text-foreground">Full flow</p>
                      <p className="text-foreground-50">(8 steps)</p>
                      <Switch aria-label="Full flow" />
                    </div>
                  </div>
                  <SingleCard
                    description="Choose the path to be tested"
                    title="Set the start and end"
                  />
                </div>
                <div>
                  <CardTitle>DEFINE THE CONDITIONS</CardTitle>
                  <SingleCard
                    description="Create or use a saved payload"
                    title="Payload"
                  />
                  {mockData ? (
                    <CardDropdown
                      subtitle={mockData.subTitle}
                      title={mockData.title}
                    />
                  ) : (
                    <SingleCard
                      description="Create or use a saved mock"
                      title="Mock Responses"
                      onClick={() => setShowMockResponses(true)}
                    />
                  )}

                  <SingleCard
                    description="Configure assertions"
                    title="Expected Results"
                  />
                  <MockResponses
                    show={showMockResponses}
                    onClose={() => setShowMockResponses(false)}
                  />
                </div>
                <div>
                  <CardTitle>ORGANIZE YOUR TESTS</CardTitle>
                  <CardGroup />
                </div>
              </DrawerBody>
              <DrawerFooter className="flex-shrink-0 flex justify-between">
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" variant="bordered" onPress={onClose}>
                  Save
                </Button>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

"use client";
interface MockData {
  id: string;
  title: string;
  subTitle: string;
}

interface MockContextType {
  mockData: MockData | null;
  setMockData: (data: MockData | null) => void;
}

interface MockProviderProps {
  children: ReactNode;
}

import React, { createContext, useContext, useState, ReactNode } from "react";

const MockContext = createContext<MockContextType | undefined>(undefined);

export const useMock = (): MockContextType => {
  const context = useContext(MockContext);

  if (!context) {
    throw new Error("useMock must be used within a MockProvider");
  }

  return context;
};

export const MockProvider: React.FC<MockProviderProps> = ({ children }) => {
  const [mockData, setMockData] = useState<MockData | null>(null);

  return (
    <MockContext.Provider value={{ mockData, setMockData }}>
      {children}
    </MockContext.Provider>
  );
};

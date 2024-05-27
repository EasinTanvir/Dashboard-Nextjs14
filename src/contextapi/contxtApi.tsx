import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextType {
  open: boolean;
  setOpen: (data: boolean) => void;
}

const defaultContextValue: ContextType = {
  open: false,
  setOpen: () => {},
};
const ContextApi = createContext<ContextType>(defaultContextValue);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <ContextApi.Provider value={{ open, setOpen }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(ContextApi);

  return context;
};

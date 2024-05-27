"use client";

import { ContextProvider } from "./contxtApi";

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default ContextWrapper;

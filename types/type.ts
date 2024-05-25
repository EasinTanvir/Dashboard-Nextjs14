import React from "react";

export interface Children {
  children: React.ReactNode;
}
export interface Search {
  searchParams: {
    filter?: string;
    searchterm?: string;
    page?: string;
  };
}
export interface User {
  username?: string;
  email?: string;
  password?: string;
  id?: string;
  status?: string;
}
export interface SessionProps {
  user: {
    name: string;
    email: string;
    id: string;
    image?: string;
  };
}

export interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  item?: User;
}

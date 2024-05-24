import React from "react";

export interface Children {
  children: React.ReactNode;
}
export interface Search {
  searchParams: {
    filter: string;
  };
}
export interface User {
  username: string;
  email: string;
  password?: string;
  id?: string;
  status?: string;
}

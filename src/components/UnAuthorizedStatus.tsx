import React from "react";
import { Alert } from "@mui/material";
import Link from "next/link";
const UnAuthorizedStatus = ({ text }: { text: string }) => {
  return (
    <>
      <div className="w-full min-h-96 flex justify-center items-center">
        <Alert severity="warning">
          {text}
          <Link className="underline ms-1 font-bold text-btnColor" href="/auth">
            Login
          </Link>
        </Alert>
      </div>
    </>
  );
};

export default UnAuthorizedStatus;

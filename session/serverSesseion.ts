import { getServerSession } from "next-auth";
import { authConfig } from "@/app/api/auth/authOptions";

export const getServerCredentials = async () => {
  return await getServerSession(authConfig);
};

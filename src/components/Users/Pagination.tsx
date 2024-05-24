"use client";
import Pagination from "@mui/material/Pagination";
import {
  useRouter,
  useSearchParams,
  usePathname,
  useParams,
} from "next/navigation";

type Props = {
  numberOfPage: Number[];
};

const UserPagination = ({ numberOfPage }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();
  const paramValue = Number(searchParams.get("page"));

  const onChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    params.set("page", value.toString());
    router.push(`${pathname}?${params}`);
  };

  return (
    <Pagination
      page={paramValue}
      count={numberOfPage.length}
      onChange={onChangeHandler}
      shape="rounded"
    />
  );
};

export default UserPagination;

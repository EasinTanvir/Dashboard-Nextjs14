"use client";
import Pagination from "@mui/material/Pagination";
import {
  useRouter,
  useSearchParams,
  usePathname,
  useParams,
} from "next/navigation";

type Props = {
  numberOfPage: number[];
};

const UserPagination = ({ numberOfPage }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();
  const paramValue = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  console.log("paramValue = ", paramValue);

  const onChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    params.set("page", value.toString());
    router.push(`${pathname}?${params}`);
  };

  return (
    <Pagination
      color="primary"
      page={paramValue}
      defaultPage={2}
      siblingCount={0}
      boundaryCount={2}
      count={numberOfPage.length}
      onChange={onChangeHandler}
      shape="rounded"
    />
  );
};

export default UserPagination;

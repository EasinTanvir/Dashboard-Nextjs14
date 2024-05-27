import { User } from "../../../types/type";
import UserButton from "./UserButton";
import Alert from "@mui/material/Alert";
const UserList = (item: User) => {
  return (
    <div className="grid   md:grid-cols-4 grid-cols-200px  my-5">
      <div className="grid text-md md:justify-center justify-start ">
        {item.username}
      </div>
      <div className="grid text-md md:justify-center justify-start ">
        {item.email}
      </div>
      <div className="grid text-md md:justify-center justify-start ">
        {item.status === "ADMIN" ? (
          <span className="bg-teal-300 px-4 py-1 rounded-md">
            {item.status}
          </span>
        ) : (
          <>{item.status}</>
        )}
      </div>
      <UserButton item={item} />
    </div>
  );
};

export default UserList;

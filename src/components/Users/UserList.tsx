import { User } from "../../../types/type";
import UserButton from "./UserButton";

const UserList = (item: User) => {
  return (
    <div className="grid grid-cols-4  my-5">
      <div className="grid text-md justify-center ">{item.username}</div>
      <div className="grid text-md justify-center ">{item.email}</div>
      <div className="grid text-md justify-center ">{item.status}</div>
      <UserButton item={item} />
    </div>
  );
};

export default UserList;

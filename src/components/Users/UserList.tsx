import { User } from "../../../types/type";
import UserButton from "./UserButton";

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
        {item.status}
      </div>
      <UserButton item={item} />
    </div>
  );
};

export default UserList;

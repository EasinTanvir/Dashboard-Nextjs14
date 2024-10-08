"use client";
import React, { useEffect } from "react";
import { Dashboard, Logout } from "@mui/icons-material";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Collapse from "@mui/material/Collapse";
import { usePathname } from "next/navigation";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { ListItemIcon, MenuItem } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
type Props = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};

const SideBar = ({ open, setOpen }: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [opens, setOpens] = React.useState<boolean>(false);
  const [opens2, setOpens2] = React.useState<boolean>(false);
  const [opens3, setOpens3] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const pathName = usePathname();

  const handleClick = () => {
    setOpens(!opens);
    setOpens2(false);
    setOpens3(false);
    setOpen(false);
  };
  const handleClick2 = () => {
    setOpens2(!opens2);
    setOpens(false);
    setOpens3(false);
  };
  const handleClick3 = () => {
    setOpens3(!opens3);
    setOpens(false);
    setOpens2(false);
  };

  useEffect(() => {
    if (open) {
      setOpens(false);
      setOpens(false);
      setOpens3(false);
    }
  }, [open]);

  const logout = async () => {
    setAnchorEl(null);

    const data = await signOut({ redirect: false, callbackUrl: "/auth" });
    router.push(data.url);
  };

  return (
    <>
      <div
        className={`${
          open ? "max-w-12 min-w-12 md:block hidden" : "max-w-52 min-w-52"
        } bg-topBar   px-2 py-2 transition-all duration-200 z-50   fixed top-left-0 min-h-custom max-h-custom overflow-y-auto overflow-x-hidden `}
      >
        <div
          className={` ${
            !open ? "flex justify-end" : "flex justify-center "
          }  min-h-7 max-h-7 `}
        >
          <button
            className="text-white flex gap-1 items-center"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <>
                <FaArrowLeft className="text-sm" />
                <span>Close</span>
              </>
            ) : (
              <>
                <FaArrowRight className="text-md" />
              </>
            )}
          </button>
        </div>
        <div className="flex flex-col mt-3  gap-5">
          <Link
            href="/"
            className={`flex  ${
              pathName === "/"
                ? "bg-submenu text-white "
                : "bg-topBar text-slate-500"
            }   items-center  py-1   transition-all  rounded-sm  px-1   gap-2`}
          >
            <span>
              <Dashboard className=" text-2xl" />
            </span>
            <span
              style={{ marginTop: "3px" }}
              className={` transition-all font-semibold  ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            >
              Dashboard
            </span>
          </Link>
          <React.Fragment>
            <div className="flex flex-col   transition-all duration-300 rounded-sm     gap-0">
              <Link
                onClick={handleClick2}
                href="/post"
                className={`flex  gap-2 items-center py-1 px-1  ${
                  pathName.startsWith("/post")
                    ? "bg-submenu text-white"
                    : "bg-topBar text-slate-500"
                } `}
              >
                <span>
                  <MdOutlinePostAdd className=" text-2xl" />
                </span>
                <span
                  style={{ marginTop: "4px" }}
                  className={` transition-all font-semibold  ease-in-out ${
                    open ? "opacity-0" : ""
                  }`}
                >
                  Post
                </span>
                <div className="flex-1 flex justify-end items-center">
                  <IoMdArrowDropdown />
                </div>
              </Link>
              <Collapse
                className={open ? "opacity-0" : ""}
                in={opens2}
                timeout="auto"
                unmountOnExit
              >
                <div
                  className={`flex flex-col  px-7 py-3 text-sm gap-2 rounded-sm  `}
                >
                  <Link href="/post">
                    <span
                      className={`${
                        pathName === "/post" ? "text-white" : "text-slate-400"
                      }`}
                    >
                      All Posts
                    </span>
                  </Link>
                  <Link href="/post/add-post">
                    <span
                      className={`${
                        pathName === "/post/add-post"
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    >
                      Add Post
                    </span>
                  </Link>
                  <Link href="/post/add-category">
                    <span
                      className={`${
                        pathName === "/post/add-category"
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    >
                      Add Category
                    </span>
                  </Link>
                </div>
              </Collapse>
            </div>
          </React.Fragment>

          <React.Fragment>
            <div className="flex flex-col   transition-all duration-300 rounded-sm     gap-0">
              <Link
                onClick={handleClick}
                href="/user"
                className={`flex  gap-2 items-center py-1 px-1  ${
                  pathName.startsWith("/user")
                    ? "bg-submenu text-white"
                    : "bg-topBar text-slate-500"
                }  `}
              >
                <span>
                  <FaUser className=" text-xl" />
                </span>
                <span
                  style={{ marginTop: "4px" }}
                  className={` transition-all font-semibold  ease-in-out ${
                    open ? "opacity-0" : ""
                  }`}
                >
                  User
                </span>
                <div className="flex-1 flex justify-end items-center">
                  <IoMdArrowDropdown />
                </div>
              </Link>
              <Collapse
                className={open ? "opacity-0" : ""}
                in={opens}
                timeout="auto"
                unmountOnExit
              >
                <div
                  className={`flex flex-col  px-7 pt-1 pb-2 text-sm gap-3 rounded-sm  `}
                >
                  <Link href="/user">
                    <span
                      className={`${
                        pathName === "/user" ? "text-white" : "text-slate-400"
                      }`}
                    >
                      All Users
                    </span>
                  </Link>
                  <Link href="/user/add-user">
                    <span
                      className={`${
                        pathName === "/user/add-user"
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    >
                      Add User
                    </span>
                  </Link>
                </div>
              </Collapse>
            </div>
          </React.Fragment>

          <Link
            href="/setting"
            className={`flex  ${
              pathName === "/setting"
                ? "bg-submenu text-white "
                : "bg-topBar text-slate-500"
            }   items-center  py-1   transition-all  rounded-sm  px-1   gap-2`}
          >
            <span>
              <MdOutlineSettings className=" text-2xl" />
            </span>
            <span
              style={{ marginTop: "3px" }}
              className={` transition-all font-semibold  ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            >
              Setting
            </span>
          </Link>

          <React.Fragment>
            <div className="flex flex-col   transition-all duration-300 rounded-sm     gap-0">
              <Link
                onClick={handleClick3}
                href="/product"
                className={`flex  gap-2 items-center py-1 px-1  ${
                  pathName.startsWith("/product")
                    ? "bg-submenu text-white"
                    : "bg-topBar text-slate-500"
                } `}
              >
                <span>
                  <MdOutlinePostAdd className=" text-2xl" />
                </span>
                <span
                  style={{ marginTop: "4px" }}
                  className={` transition-all font-semibold  ease-in-out ${
                    open ? "opacity-0" : ""
                  }`}
                >
                  Product
                </span>
                <div className="flex-1 flex justify-end items-center">
                  <IoMdArrowDropdown />
                </div>
              </Link>
              <Collapse
                className={open ? "opacity-0" : ""}
                in={opens3}
                timeout="auto"
                unmountOnExit
              >
                <div
                  className={`flex flex-col  px-7 py-3 text-sm gap-2 rounded-sm  `}
                >
                  <Link href="/product">
                    <span
                      className={`${
                        pathName === "/product"
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    >
                      All Products
                    </span>
                  </Link>
                  <Link href="/product/add-product">
                    <span
                      className={`${
                        pathName === "/product/add-product"
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    >
                      Add Post
                    </span>
                  </Link>
                </div>
              </Collapse>
            </div>
          </React.Fragment>

          <Link
            href="/comments"
            className={`flex  ${
              pathName === "/comments"
                ? "bg-submenu text-white "
                : "bg-topBar text-slate-500"
            }   items-center  py-1   transition-all  rounded-sm  px-1   gap-2`}
          >
            <span>
              <FaRegCommentDots className=" text-2xl" />
            </span>
            <span
              style={{ marginTop: "3px" }}
              className={` transition-all font-semibold  ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            >
              Comments
            </span>
          </Link>

          <Link
            href="/help"
            className={`flex  ${
              pathName === "/help"
                ? "bg-submenu text-white "
                : "bg-topBar text-slate-500"
            }   items-center  py-1   transition-all  rounded-sm  px-1   gap-2`}
          >
            <span>
              <IoMdHelpCircle className=" text-2xl" />
            </span>
            <span
              style={{ marginTop: "3px" }}
              className={` transition-all font-semibold  ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            >
              Help
            </span>
          </Link>
        </div>

        {status === "authenticated" && (
          <div
            className={`flex absolute left-2 right-2 text-white bottom-2 w-fit   items-center  py-1   transition-all  rounded-sm  px-1   gap-2`}
          >
            <MenuItem onClick={logout}>
              <ListItemIcon className="text-white">
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;

import React, { useState } from "react";
import { Category } from "../../../types/type";
import { Alert } from "@mui/material";
import Buttons from "../Buttons";
import { deleteCategoryAction } from "../../../serverAction/deleteCategoryAction";
import toast from "react-hot-toast";
import { SelectAll } from "@mui/icons-material";
import { Blocks } from "react-loader-spinner";

const CategoryList = ({ cateLists }: { cateLists: Category[] }) => {
  const [selctAll, setSelctAll] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const onSelectAllHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allIdList = cateLists.map((item) => item.id);
      //@ts-ignore
      setSelctAll(allIdList);
    } else {
      setSelctAll([]);
    }
  };

  const onSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelctAll((prevSelctAll) => [...prevSelctAll, value]);
    } else {
      setSelctAll((prevSelctAll) => prevSelctAll.filter((id) => id !== value));
    }
  };

  const onDeleteHandler = async () => {
    setLoading(true);
    //
    try {
      //@ts-ignore
      const res = await deleteCategoryAction(selctAll);
      setSelctAll([]);
      if (res.message) {
        toast.success(res.message);
      } else if (res.error) {
        toast.error(res.error);
      }
    } catch (err: any) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className=" text-xl font-bold text-topBar">All Category List</h1>
        {selctAll.length > 0 && (
          <Buttons
            onClick={onDeleteHandler}
            className="bg-rose-800 text-white "
          >
            {loading ? (
              <Blocks
                height="30"
                width="25"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
            ) : (
              "Delete"
            )}
          </Buttons>
        )}
      </div>

      <hr className="my-4" />

      <div className="mt-3">
        <div className="grid md:gap-3 gap-0 md:grid-cols-5 grid-cols-3 bg-topBar px-4 py-3 rounded-sm text-white">
          <div className="flex gap-1 col-span-1 items-center font-semibold">
            <input
              id="all"
              type="checkbox"
              checked={selctAll.length === cateLists.length}
              onChange={onSelectAllHandler}
            />
            <label htmlFor="all">Select All</label>
          </div>
          <div className="grid sm:col-span-2 col-span-1 justify-center font-semibold">
            Category
          </div>
          <div className="grid sm:col-span-2 col-span-1 justify-center font-semibold">
            Slug
          </div>
        </div>
        <hr className="my-2" />
        {cateLists.length > 0 ? (
          cateLists.map((item: Category) => (
            <div
              key={item.id}
              className="grid gap-3 grid-cols-5 mt-2 bg-slate-300 rounded-sm px-4 py-3"
            >
              <div className="flex gap-1 items-center text-sm">
                <input
                  checked={selctAll.includes(item.id || "")}
                  onChange={onSelectHandler}
                  value={item.id}
                  type="checkbox"
                  id={item.id}
                />
                <label htmlFor={item.id}>Select</label>
              </div>
              <div className="grid font-semibold col-span-2 justify-center text-sm">
                {item.name}
              </div>
              <div className="grid col-span-2 justify-center text-sm">
                {item.slug}
              </div>
            </div>
          ))
        ) : (
          <Alert>No Category Added</Alert>
        )}
      </div>
    </div>
  );
};

export default CategoryList;

"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";

import { User } from "../../../types/type";
const AddNewUser = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
      dirtyFields,
      isDirty,
      isValid,
    },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmitHandler: SubmitHandler<User> = (data: User) => {
    console.log(data);
  };

  return (
    <div className="p-4 bg-slate-400 min-h-custom  flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-topBar w-[560px] p-4 rounded-md"
        action=""
      >
        <h1 className=" text-xl font-bold  text-center text-white">
          Add New User
        </h1>
        <hr className="my-4" />
        <div className="flex flex-col gap-3">
          <Input
            label="UserName"
            id="username"
            placeholder="type username"
            errors={errors}
            required
            register={register}
            message="UserName is required"
          />
          <Input
            label="Email"
            id="email"
            errors={errors}
            required
            placeholder="type email"
            register={register}
            message="Email is required"
          />
          <Input
            label="Password"
            id="password"
            errors={errors}
            placeholder="type password"
            required
            register={register}
            message="Password is required"
            min={6}
          />
        </div>
        <button
          className="bg-teal-700 px-3 py-2 rounded-md text-white font-semibold mt-4 hover:bg-teal-500"
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;

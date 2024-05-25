"use client";
import Input from "@/components/Users/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrismaCli } from "../../../../prismaCli/prismaClient";
import axios from "axios";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "../../../../types/type";
import toast from "react-hot-toast";
import SubmitButton from "@/components/Users/SubmitButton";

const Auth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
    },
    mode: "onTouched",
  });

  const onSubmitHandler: SubmitHandler<User> = async (datas: User) => {
    setIsLoading(true);

    signIn("credentials", {
      email: datas.email,
      password: datas.password,
      redirect: false,
    }).then((cb) => {
      if (cb?.ok) {
        setIsLoading(false);
        router.push("/");
      }
      if (cb?.error) {
        setIsLoading(false);
        toast.error(cb.error);
      }
    });
  };

  return (
    <div className="p-4 bg-slate-400 min-h-custom  flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-topBar w-[560px] px-4 py-8  min-h-80 rounded-md"
      >
        {" "}
        <h1 className=" text-xl font-bold  text-center text-white">Login</h1>
        <hr className="my-4" />
        <div className="space-y-5">
          <Input
            label="Email"
            type="text"
            register={register}
            id="email"
            message="Email is Required"
            errors={errors}
            placeholder="type email or username"
            required
          />
          <Input
            label="Password"
            type="password"
            register={register}
            id="password"
            message="Password is Required"
            errors={errors}
            required
            placeholder="type password"
          />
        </div>
        <SubmitButton isSubmitting={isSubmitting || isLoading}>
          Login
        </SubmitButton>
      </form>
    </div>
  );
};

export default Auth;

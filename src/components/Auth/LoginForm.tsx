"use client";
import Input from "@/components/Users/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "../../../types/type";
import toast from "react-hot-toast";
import SubmitButton from "@/components/Users/SubmitButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const guest = {
    email: "guest@gmail.com",
    password: "guest123",
  };

  const defaultValues = checked
    ? guest
    : {
        email: "",
        password: "",
      };

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
    defaultValues,
    mode: "onTouched",
  });

  const onSubmitHandler: SubmitHandler<User> = async (datas: User) => {
    setIsLoading(true);
    console.log(datas);

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

  const onGurstHandler = (event: any) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    reset(checked ? guest : { email: "", password: "" });
  }, [checked, reset]);

  return (
    <div className="px-4 bg-slate-400 min-h-custom  flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-topBar w-[560px] px-4 py-6  min-h-96 rounded-md"
      >
        {" "}
        <h1 className=" text-3xl font-bold  text-center text-white  ">Login</h1>
        <hr className="mb-8 mt-3" />
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
        <FormControlLabel
          checked={checked}
          onChange={onGurstHandler}
          className="text-white mt-2"
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
                "& .MuiSvgIcon-root": {
                  backgroundColor: "#1D2327",
                  borderRadius: 1,
                },
              }}
            />
          }
          label="Login as Guest"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontWeight: "bold",
              marginTop: "2px",
            },
          }}
        />
        <SubmitButton isSubmitting={isSubmitting || isLoading}>
          Login
        </SubmitButton>
      </form>
    </div>
  );
};

export default LoginForm;

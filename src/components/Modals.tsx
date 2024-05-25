"use client";
import Modal from "@mui/material/Modal";
import { ModalProps } from "../../types/type";
import Input from "./Users/Input";
import api from "@/utils/api";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "./Users/SubmitButton";
import { User } from "../../types/type";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { updateUser } from "../../serverAction/updateUser";

const Modals = ({ setOpen, open, item }: ModalProps) => {
  const handleClose = () => setOpen(false);

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
      username: item?.username,
      email: item?.email,
      status: item?.status,
    },
    mode: "onTouched",
  });

  //@ts-ignore
  const onSubmitHandler: SubmitHandler<User> = async (datas: User) => {
    try {
      //@ts-ignore
      const res = await updateUser(datas, item?.id!);
      reset();
      setOpen(false);
      toast.success(res.message);
    } catch (err: any) {
      toast.error("User Update Failed");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex justify-center items-center min-h-custom">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="bg-topBar w-[560px] p-4 rounded-md"
        >
          <div className="w-full  flex justify-end">
            <button onClick={handleClose}>
              <IoMdClose className="text-red-500 text-2xl" />
            </button>
          </div>
          <h1 className=" text-xl font-bold  text-center text-white">
            Update User
          </h1>
          <hr className="my-4" />
          <div className="flex flex-col gap-3">
            <Input
              label="UserName"
              type="text"
              id="username"
              placeholder="type username"
              errors={errors}
              required
              register={register}
              message="UserName is required"
              value={item?.username}
            />
            <Input
              label="Email"
              id="email"
              errors={errors}
              required
              type="email"
              placeholder="type email"
              register={register}
              message="Email is required"
              value={item?.email}
            />
            <Input
              label="Role"
              id="status"
              errors={errors}
              required
              select
              type="select"
              register={register}
              value={item?.status}
            />
          </div>
          <SubmitButton isSubmitting={isSubmitting}>Update</SubmitButton>
        </form>
      </div>
    </Modal>
  );
};

export default Modals;

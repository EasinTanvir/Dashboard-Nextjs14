import { UseFormReturn } from "react-hook-form";

interface Input {
  label: string;
  id: string;
  errors: any;
  message: string;
  placeholder?: string;
  register: UseFormReturn["register"] | any;
  required: boolean;
  min?: Number;
}

const Input = ({
  label,
  id,
  errors,
  register,
  required,
  message,
  min,
  placeholder,
}: Input) => {
  return (
    <div className="flex flex-col gap-0 text-slate-950">
      <label htmlFor="username" className={` font-semibold text-white`}>
        {label}
      </label>
      <input
        type="text"
        id="username"
        placeholder={placeholder}
        className={` px-1 py-1 border-b-2  outline-none bg-transparent  text-white rounded-sm ${
          errors[id]?.message ? "border-rose-700" : "border-b-white"
        }`}
        {...register(id, {
          required: { value: required, message },
          minLength: min
            ? { value: min, message: "Minimum 6 character is required" }
            : null,
        })}
      />
      {errors[id]?.message && (
        <p className="text-sm text-rose-700 mt-1">{errors[id]?.message}*</p>
      )}
    </div>
  );
};

export default Input;

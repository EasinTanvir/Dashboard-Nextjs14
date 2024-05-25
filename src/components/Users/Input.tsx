import { UseFormReturn } from "react-hook-form";

interface Input {
  label: string;
  id: string;
  errors: any;
  message: string;
  type: string;
  placeholder?: string;
  value?: string;
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
  value,
  placeholder,
  type,
}: Input) => {
  return (
    <div className="flex flex-col gap-0 text-slate-950">
      <label htmlFor={id} className={` font-semibold text-white`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={` px-1 py-1 border-b-2  outline-none bg-transparent  text-white rounded-sm ${
          errors[id]?.message ? "border-red-500" : "border-b-white"
        }`}
        {...register(id, {
          required: { value: required, message },
          minLength: min
            ? { value: min, message: "Minimum 6 character is required" }
            : null,
        })}
      />
      {errors[id]?.message && (
        <p className="text-sm text-red-500 mt-1">{errors[id]?.message}*</p>
      )}
    </div>
  );
};

export default Input;

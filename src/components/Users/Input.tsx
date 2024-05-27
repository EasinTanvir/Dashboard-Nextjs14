import { UseFormReturn } from "react-hook-form";

interface Input {
  label: string;
  id: string;
  errors?: any;
  message?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  register: UseFormReturn["register"] | any;
  required: boolean;
  min?: Number;
  select?: boolean;
  textarea?: boolean;
}

const Input = ({
  label,
  id,
  errors,
  register,
  required,
  message,
  className,
  min,
  value,
  placeholder,
  type,
  select,
  textarea,
}: Input) => {
  return (
    <div className="flex flex-col gap-0 text-slate-950">
      <label
        htmlFor={id}
        className={`${className} font-semibold ${
          className ? "text-topBar" : "text-white"
        } `}
      >
        {label}
      </label>

      {!select && !textarea && (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${className} px-1 py-1 border-b-2  outline-none bg-transparent  ${
            className ? "text-topBar" : "text-white"
          } rounded-sm ${
            errors[id]?.message
              ? "border-red-500"
              : `${className ? "border-topBar" : "border-b-white"}`
          }`}
          {...register(id, {
            required: { value: required, message },
            minLength: min
              ? { value: min, message: "Minimum 6 character is required" }
              : null,
          })}
        />
      )}
      {textarea && (
        <textarea
          rows={5}
          type={type}
          id={id}
          placeholder={placeholder}
          className={` px-1 py-1 border-2 mt-2  outline-none bg-transparent  text-white rounded-sm ${
            errors[id]?.message ? "border-red-500" : "border-b-white"
          }`}
          {...register(id, {
            required: { value: required, message },
            minLength: min
              ? { value: min, message: "Minimum 6 character is required" }
              : null,
          })}
        />
      )}

      {select && (
        <select
          id={id}
          className="bg-transparent text-white mt-1 border py-1 rounded-sm px-1 bg-topBar"
          {...register(id)}
        >
          {/* <option className="bg-topBar" value="ADMIN">
            ADMIN
          </option>
          <option className="bg-topBar" value="EDTOR">
            EDTOR
          </option> */}
          <option className="bg-topBar" value="AUTHOR">
            AUTHOR
          </option>
          <option className="bg-topBar" value="SUBSCRIBER">
            SUBSCRIBER
          </option>
        </select>
      )}

      {errors[id]?.message && (
        <p className="text-sm text-red-500 mt-1">{errors[id]?.message}*</p>
      )}
    </div>
  );
};

export default Input;

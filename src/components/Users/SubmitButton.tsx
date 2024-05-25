import React from "react";
import { useFormStatus } from "react-dom";
import { Blocks } from "react-loader-spinner";
const SubmitButton = ({
  isSubmitting,
  children,
}: {
  isSubmitting: boolean;
  children: React.ReactNode;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={isSubmitting}
      className="bg-teal-700 px-3 py-2 w-40 flex justify-center rounded-md text-white font-semibold mt-4 hover:bg-teal-500"
      type="submit"
    >
      {isSubmitting ? (
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
        <>{children}</>
      )}
    </button>
  );
};

export default SubmitButton;

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

interface Inputprops {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}
const Input: React.FC<Inputprops> = ({
  label,
  id,
  register,
  required,
  errors,
  type = "text",
  disabled,
}) => {
  return (
    <div>
      <label
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        "
      >
        {label}
      </label>
      <div>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`form-input 
          w-full 
          rounded-md 
          border-0 
          py-1.5
           text-gray-900 
           shadow-sm 
           ring-1
            ring-inset            
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
`)}
        />
      </div>
    </div>
  );
};

export default Input;

import React from "react";
import clsx from 'clsx'
interface Buttonprops {
  disabled: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  fullwidth?:boolean;
}

const Button: React.FC<Buttonprops> = ({
  type = "button",
  disabled,
  onClick,
  children,
  fullwidth,
  secondary,
  danger
}) => {
  return (
    <div>
      <button       onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(`
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
        disabled && 'opacity-50 cursor-default',
        fullwidth && 'w-full',
        secondary ? 'text-gray-900' : 'text-white',
        danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600'
      )}
>
        {children}
      </button>
    </div>
  );
};

export default Button;

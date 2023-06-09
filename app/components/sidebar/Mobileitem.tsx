import Link from "next/link";
import React from "react";
import clsx from "clsx";
interface Mobileitemprops {
  href: string;
  active?: boolean;
  icon: any;
  onClick?: () => void;
}

const Mobileitem:React.FC<Mobileitemprops>= ({ href, icon: Icon, active, onClick }) => {

  const handleClick=()=>{
    if(onClick){
      return onClick();
    }
  }
  return (
    <div>
      <Link
        href={href}
        onClick={handleClick}
        className={clsx(
          `group
           flex 
           gap-x-3 
           text-sm 
           leading-6 
           font-semibold 
           w-full 
            justify-center 
            p-4
             text-gray-500
              hover:text-black 
              hover:bg-gray-100`
        )}
      >
        <Icon className='h-6 w-6' />
      </Link>
    </div>
  );
};

export default Mobileitem;

import React from 'react'
import { IconType } from 'react-icons'
interface Authsocialbuttonprops{
    icon:IconType;
    onClick?:()=>void;
}

const Authsocialbutton:React.FC<Authsocialbuttonprops>= ({icon:Icon,onClick}) => {
  return (
    <div className='border-2 rounded border-gray-400 px-12 py-2'>
        <Icon onClick={onClick}/>
    </div>
  )
}

export default Authsocialbutton;

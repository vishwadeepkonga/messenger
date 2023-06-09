import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MobileFooter from '../components/sidebar/MobileFooter'
import getUsers from '../actions/getUsers'
import UserList from '../components/UserList';
export default async function UserLayout({children}:{children:React.ReactNode}){
    const users=await getUsers();
return(
//@ts-ignore

<>   
 <Sidebar>
    <div className='h-full'>
        <UserList items={users}/>
        {children}
    </div>
    </Sidebar>
    <MobileFooter/>
</>
    
)
}
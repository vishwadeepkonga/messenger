'use client'

import clsx from "clsx"

import userConversations from "../hooks/userConversations"
import Emptystate from "../components/EmptyState/page"

const Home=()=>{
    const {isOpen}=userConversations();

    return(
<div className={
    clsx(
        "lg:pl-80 h-full lg:block",isOpen?'block':'hidden'
    )
}>
<Emptystate/>
    </div>
    )
}
export default Home;
import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getUsers from "../actions/getUsers";
export default async function ConversationsLayout({
    children
}:{children:React.ReactNode}){
    const conversations=await getConversations();
    console.log(conversations,"conversationsosososo");
    
    const users=await getUsers();
    return(
        //@ts-ignore
        <Sidebar>
            <div className="h-full">
                <ConversationList 
                users={users}
                initialItems={conversations}
               />
                {children}
            </div>
        </Sidebar>
    )
}
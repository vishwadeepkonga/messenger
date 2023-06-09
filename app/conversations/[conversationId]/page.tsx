import getMessages from "@/app/actions/getMessages";
import getConversationById from "@/app/actions/getConversationByid";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import Emptystate from "@/app/components/EmptyState/page";
interface IParams {
  conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <Emptystate />
        </div>
      </div>
    )
  }

  return ( 
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
}

export default ChatId;
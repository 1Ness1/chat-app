import Message from "./Message"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useGetMessages from "../../hooks/useGetMessages"
import { useEffect, useRef } from "react";

const Messages = () => {
  const {loading, messages} = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 50)
    
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
      {!loading && messages.length > 0 && (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message}/>
          </div>
        ))
      )}
    </div>
  )
}

export default Messages
import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  const lastMessagesRef = useRef(null);
  // console.log(messages)


  useEffect(() => {
    setTimeout(()=>{
      lastMessagesRef.current?.scrollIntoView({behaviour:"smooth"})
    },100)
  }, [messages]);

  return (
    <div className="px-4  flex-1 overflow-auto">
      {!loading &&
        messages.length === 0 &&
        "Send a message to start the conversation!"}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}
          ref={lastMessagesRef}>
            <Message   message={message} />
          </div>

        ))}
    </div>
  );
};

export default Messages;

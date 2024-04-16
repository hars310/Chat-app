import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || loading) return;
    // console.log(message)
    await sendMessage(message);
    // console.log("second")
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border outline-none text-sm rounded-lg block w-full p-2.5
        border-gray-500 text-white"
          placeholder="Send a message here..."
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute rotate-45 text-lg text-white inset-y-6  end-0  flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

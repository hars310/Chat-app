import {BsSend} from 'react-icons/bs'
const MessageInput = () => {
  return (
    <div className="px-4 my-3"> 
    <div className="w-full relative">
        <input type="text" className="border outline-none text-sm rounded-lg block w-full p-2.5
        border-gray-500 text-white" 
        placeholder="Send a message here..."
        id="" />
        <button type="submit" className="absolute rotate-45 text-lg text-white inset-y-6  end-0  flex items-center pe-3">
            <BsSend />
        </button>

    </div>
      </div>
  )
}

export default MessageInput
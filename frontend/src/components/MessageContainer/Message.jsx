
const Message = () => {
  return (
    <>
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full ">
                <img src="https://avatar.iran.liara.run/public" alt="" />
            </div>
        </div>
        <div className={`chat-bubble  text-white bg-blue-500 `}>Hi whats up</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">11:10</div>
    </div>
    <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full ">
                <img src="https://avatar.iran.liara.run/public/boy" alt="" />
            </div>
        </div>
        <div className={`chat-bubble  text-white bg-zinc-500 `}>Hi whats up</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">11:10</div>
    </div>
    </>
    
  )
}

export default Message
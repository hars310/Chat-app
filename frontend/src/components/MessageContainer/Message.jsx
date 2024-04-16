import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation()

    const MessageFromMe = message.senderId === authUser._id;
    const chatClassName  = MessageFromMe ? 'chat-end ' : 'chat-start '
    const profilePic = MessageFromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleBgColor = MessageFromMe ? 'bg-violet-700' : 'bg-zinc-600'
    
  return (
    <>
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full ">
                <img src={profilePic} alt="bubble-profile" />
            </div>
        </div>
        <div className={`chat-bubble ${bubbleBgColor}  text-white`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
    {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
</div>

    </div>
    </>
    
  )
}

export default Message
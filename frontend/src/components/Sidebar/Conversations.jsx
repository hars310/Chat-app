import useGetConversation from "../../hooks/useGetConversation";
import SingleConversation from "./SingleConversation"

const Conversations = () => {
  // eslint-disable-next-line no-unused-vars
  const {loading,conversations} = useGetConversation();

  if (loading || !conversations) {
    return <div>
      <span className="loading loading-spinner"></span>
    </div>;
  }
  // console.log("conversations: ",conversations);


  return (
    <div className="h-[420px] py-2 flex    flex-col overflow-auto">
      {conversations.map((conversation) => (
        <SingleConversation key={conversation._id} conversation={conversation} />
      ))}  
    </div>
  )
}

export default Conversations


// import SingleConversation from "./SingleConversation"

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <SingleConversation />
//         <SingleConversation />
//         <SingleConversation />
//         <SingleConversation />
//         <SingleConversation />
//         <SingleConversation />
//         <SingleConversation />

//     </div>
//   )
// }

// export default Conversations



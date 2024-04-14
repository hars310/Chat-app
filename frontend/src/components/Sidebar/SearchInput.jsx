import { CiSearch } from "react-icons/ci";
const SearchInput = () => {
    return (
      <form className="h-12 flex items-center gap-1 pt-2 px-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered h-10 rounded-full"
        />
        <button type="submit" className="btn  btn-circle border-none bg-sky-500 text-white">
          <CiSearch className="text-2xl  font-bold"/>
        </button>
      </form>
    );
  };
  

export default SearchInput









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



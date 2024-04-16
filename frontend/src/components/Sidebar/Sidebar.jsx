import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r-[0.2px] w-72 p-2 border-zinc-900 relative">
      <div className="h-full flex flex-col">
        <SearchInput />
        <div className="border-b-[0.4px] border-gray-500 mt-2 px-3"></div>
        <div className="flex-grow overflow-y-auto">
          <Conversations />
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;




// import Conversations from "./Conversations"
// import LogoutButton from "./LogoutButton"
// import SearchInput from "./SearchInput"

// const Sidebar = () => {
//   return (
//     <div>
//         <SearchInput />
//         <div className="border-b-[0.4px] border-gray-500 mt-2 px-3"></div>
//          <Conversations />
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar
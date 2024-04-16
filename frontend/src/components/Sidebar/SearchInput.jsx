import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setSearch('');
  };

  const filteredConversations = search
    ? conversations.filter((c) =>
        c.fullname.toLowerCase().includes(search.toLowerCase())
      )
    : conversations;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      toast.error('Please enter a search term');
      return;
    }
    const matchedUsers = filteredConversations.length > 0;
    if (!matchedUsers) {
      toast.error('No user found');
    }
  };

  return (
    <div className="relative flex items-center  h-12">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered h-10 w-[120%] rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="hidden"></button>
      </form>
      {search && (
        <div className="absolute top-11 z-10 bg-zinc-700 text-white w-full mt-1 p-1 rounded-md shadow-md">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="cursor-pointer hover:bg-gray-800 p-1 rounded-md"
                onClick={() => handleSelectConversation(conversation)}
              >
                {conversation.fullname}
              </div>
            ))
          ) : (
            <div className="p-1">No matching users found</div>
          )}
        </div>
      )}
    </div>
  );
};


export default SearchInput
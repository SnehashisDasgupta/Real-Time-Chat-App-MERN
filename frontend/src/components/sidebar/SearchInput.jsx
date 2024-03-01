import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3){
      return toast.error('must be alteast 3 character long');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error('No such user found!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-700 border-none text-white"
      >
        <CiSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// STARTER CODE FOR SEARCH INPUT
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle bg-sky-700 border-none text-white">
//             <FaSearch className="w-6 h-6 outline-none" />
//         </button>
//     </form>
//   )
// }

// export default SearchInput

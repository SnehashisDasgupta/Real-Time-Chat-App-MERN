import { CiSearch } from "react-icons/ci";


const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-sky-700 border-none text-white">
            <CiSearch className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput



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
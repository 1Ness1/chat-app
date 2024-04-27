import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input className="input input-bordered rounded-full" placeholder="Search..." type="text" />
        <button className="btn btn-circle bg-sky-500 text-white" type="submit">
            <IoSearchSharp  className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput
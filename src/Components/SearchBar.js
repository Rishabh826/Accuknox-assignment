import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative my-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
        <span className="text-gray-500 sm:text-sm">
          <FaSearch color="#afb1b3" />
        </span>
      </div>
      <input
        type="text"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search anything..."
      />
    </div>
  );
};

export default SearchBar;
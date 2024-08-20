import Breadcrumb from "./Breadcrumb";
import SearchBar from "./SearchBar";
import { RiAccountCircleFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-black text-white">
      <Breadcrumb />
      <SearchBar />
      <RiAccountCircleFill size={25} color="gray" />
    </nav>
  );
};

export default NavBar;
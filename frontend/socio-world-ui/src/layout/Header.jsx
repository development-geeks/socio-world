import CustomIconButton from "src/components/CustomIconButton";
import logoImage from "../assets/images/sw-logo/socio-world-192x192.png";
import { IoSettingsSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import FormInput from "src/components/form-components/FormInput";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="h-14 flex items-center px-3 bg-white fixed z-99 top-0 w-full">
      <div className="w-14">
        <img src={logoImage} alt="socio-world" className="h-9 w-9"></img>
      </div>
      <div className="flex-1 flex justify-between items-center">
        <div className="w-80">
          <FormInput size="small" placeholder="Search..."></FormInput>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <NavbarItem itemName="Dashboard" />
            <NavbarItem itemName="Account" />
            <NavbarItem itemName="My Network" />
          </ul>
        </div>
      </div>
      <div className="flex">
        <CustomIconButton type="icon" icon={MdMessage} />
        <CustomIconButton type="icon" icon={IoSettingsSharp} />
        <CustomIconButton type="icon" icon={IoNotifications} />
        <CustomIconButton type="image" imageSrc={logoImage} />
      </div>
    </div>
  );
};

const NavbarItem = ({ itemName, path }) => {
  return (
    <li className="px-2">
      <a
        href={`#${path}`}
        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
        aria-current="page"
      >
        {itemName}
      </a>
    </li>
  );
};
NavbarItem.propTypes = {
  itemName: PropTypes.string,
  path: PropTypes.string,
};

export default Header;

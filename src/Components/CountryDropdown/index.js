import Button from "@mui/material/Button";
import { MdKeyboardArrowDown } from "react-icons/md";

const CountryDropdown = () => {
  return (
    <Button className="countryDrop">
      <div className="info d-flex flex-column">
        <span className="label">Your Location</span>
        <span className="name">India</span>
      </div>
      <span className="ml-auto arrow-icon">
        <MdKeyboardArrowDown />
      </span>
    </Button>
  );
};

export default CountryDropdown;

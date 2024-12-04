import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import FashionIcon from "../../../assets/images/fashionIcon.png";
import ElectronicsIcon from "../../../assets/images/electronicsIcon.png";
import BagsIcon from "../../../assets/images/bagsIcon.png";
import FootwearIcon from "../../../assets/images/footwearIcon.png";
import Groceries from "../../../assets/images/groceriesIcon.png";
import BeautyIcon from "../../../assets/images/beautyIcon.png";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCatTab">
              <span className="ml-auto menu-icon align-items-center">
                <IoMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="ml-auto arrow-icon">
                <MdKeyboardArrowDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <RiHome2Line />
                  &nbsp; Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <img src={FashionIcon} alt="FashionIcon" className="mr-2" />
                  Fashion
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <img
                    src={ElectronicsIcon}
                    alt="FashionIcon"
                    className="mr-2"
                  />
                  Electronics
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <img src={BagsIcon} alt="FashionIcon" className="mr-2" />
                  Bags
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <img src={FootwearIcon} alt="FashionIcon" className="mr-2" />
                  Footwear
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <img src={Groceries} alt="FashionIcon" className="mr-2" />
                  Groceries
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <img src={BeautyIcon} alt="FashionIcon" className="mr-2" />
                  Beauty
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;

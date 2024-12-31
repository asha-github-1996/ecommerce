import React, { useState } from "react";
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
  const [isOpenSidebarValue, setIsOpenSidebarValue] = useState(false);

  console.log(isOpenSidebarValue);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab"
                onClick={() => setIsOpenSidebarValue(!isOpenSidebarValue)}
              >
                <span className="ml-auto menu-icon align-items-center">
                  <IoMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="ml-auto arrow-icon">
                  <MdKeyboardArrowDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isOpenSidebarValue === true ? "open" : " "
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Fashion</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Electronics</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Bags</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Groceries</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Beauty</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <RiHome2Line />
                    &nbsp; Home
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <img src={FashionIcon} alt="FashionIcon" className="mr-2" />
                    Fashion
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Men</Button>
                  </Link>
                  <Link to="/">
                    <Button>Women</Button>
                  </Link>
                  <Link to="/">
                    <Button>Kids</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <img
                      src={ElectronicsIcon}
                      alt="FashionIcon"
                      className="mr-2"
                    />
                    Electronics
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Phones</Button>
                  </Link>
                  <Link to="/">
                    <Button>Laptops</Button>
                  </Link>
                  <Link to="/">
                    <Button>Earbuds</Button>
                  </Link>
                  <Link to="/">
                    <Button>Tv</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <img src={BagsIcon} alt="FashionIcon" className="mr-2" />
                    Bags
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Hand Bags</Button>
                  </Link>
                  <Link to="/">
                    <Button>Tote Bags</Button>
                  </Link>
                  <Link to="/">
                    <Button>Sling Bags</Button>
                  </Link>
                  <Link to="/">
                    <Button>Wallets</Button>
                  </Link>
                  <Link to="/">
                    <Button>Backpacks</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <img
                      src={FootwearIcon}
                      alt="FashionIcon"
                      className="mr-2"
                    />
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <img src={Groceries} alt="FashionIcon" className="mr-2" />
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <img src={BeautyIcon} alt="FashionIcon" className="mr-2" />
                    Beauty
                  </Button>
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

import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";
import { LuShoppingCart } from "react-icons/lu";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logowrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />
                {/* Header serach start here */}
                <div className="headerSearch d-flex ml-3 mr-3">
                  <div>
                    <input type="text" placeholder="Search for products..." />
                  </div>
                  <div>
                    <Button className="search-icon">
                      <IoSearch />
                    </Button>
                  </div>
                </div>
                {/* Header serach ends here */}

                <div className=" d-flex align-items-center part3 ml-auto">
                  <Button className="circle mr-3">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle cart ">
                        <LuShoppingCart />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        20
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className=" d-flex align-items-center part3 ml-auto">
                  <Button className="circle cart">
                    <LuShoppingCart />
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { MyContext } from "../../App";

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countries, setCountries] = useState([]);
  const [originalCountries, setOriginalCountries] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  };
  useEffect(() => {
    setCountries(context.countryList);
    setOriginalCountries(context.countryList);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countries.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountries(list);
    } else {
      setCountries(originalCountries);
    }
  };
  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry
              : "Select Location"}
          </span>
        </div>
        <span className="ml-auto arrow-icon">
          <MdKeyboardArrowDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModal"
      >
        <h4>Choose your delivery location</h4>

        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="modalClose" onClick={() => setIsOpenModal(false)}>
          <IoCloseSharp />
        </Button>
        <div className="headerSearch d-flex w-100 ">
          <div>
            <input
              type="text"
              placeholder="Search your area..."
              onChange={filterList}
            />
          </div>
          <div>
            <Button className="search-icon">
              <IoSearch />
            </Button>
          </div>
        </div>
        <ul className="countryList mt-3">
          {countries?.length !== 0 &&
            countries?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}

          {/* <li>
            <Button>India</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li>
          <li>
            <Button>India</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li>
          <li>
            <Button>India</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li>
          <li>
            <Button>India</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li>
          <li>
            <Button>India</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li>
          <li>
            <Button>India</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li> */}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;

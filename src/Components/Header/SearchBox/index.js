import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

const SearchBox = () => {
  return (
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
  );
};
export default SearchBox;

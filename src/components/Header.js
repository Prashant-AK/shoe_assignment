import React, { useState } from "react";
import "./Style.css";
import { BsSearch } from "react-icons/bs";
function Header() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="header_container">
      <div className="header_left">
        <h3>Shoe.</h3>
      </div>
      <div className="header_right">
        <div className="input-icons">
          <i className=" icon">
            {" "}
            <BsSearch />{" "}
          </i>
          <input
            className="input-field"
            type="text"
            value={search}
            onChange={(e) => handleChange(e)}
            placeholder="Black Sneakers"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

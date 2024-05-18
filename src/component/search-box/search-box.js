import "./search-box.css";
import { useEffect } from "react";
import { Form } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <Form id="search-form" role="search">
      <div className="search-container">
        <input
          id="q"
          aria-label="search"
          type="search"
          name="search"
          placeholder="Search..."
          className="search-input"
          onChange={(event) => {
            console.log("test");
          }}
        />
        <a href="#" className="search-btn">
          <BsSearch />
        </a>
      </div>
    </Form>
  );
};

export default SearchBox;

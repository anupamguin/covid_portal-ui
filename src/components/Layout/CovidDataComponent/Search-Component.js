import React from "react";

export const SearchBox = (props) => (
  <input
    className="search-box1"
    type="search"
    placeholder={props.placeholder? props.placeholder : "Search Country"}
    onChange={props.onSearchChange}
  />
);

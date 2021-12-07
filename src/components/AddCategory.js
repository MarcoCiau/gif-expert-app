import React, { useState } from "react";
import PropTypes from 'prop-types'
import "./AddCategory.css";
export const AddCategory = ({ updateCategoryHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const userInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      updateCategoryHandler(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input type="text" value={inputValue} onChange={userInputHandler}></input>
    </form>
  );
};

AddCategory.propTypes = {
  updateCategoryHandler: PropTypes.func.isRequired,
};

AddCategory.propTypes = {
  updateCategoryHandler : PropTypes.func.isRequired
}
export default AddCategory;

import React, { useState } from "react";

function InputBox() {
  const [inputValue, setInputValue] = useState("");
  const [labelValue, setLabelValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setLabelValue(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Show Text</button>
      <label>{labelValue}</label>
    </div>
  );
}

export default InputBox;

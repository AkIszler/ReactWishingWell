import React, { useState } from "react";

function InputBox() {
  const [inputValue, setInputValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [label2Value, setLabel2Value] = useState("");
  const [label3Value, setLabel3Value] = useState("");
  const [showLabels, setShowLabels] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setLabelValue(inputValue);
    setLabel2Value(`${inputValue} is what you want?`);
    setLabel3Value(`${inputValue} is what you GET`);
    setShowLabels(true);
  };

  const handleClearButtonClick = () => {
    setInputValue("");
    setLabelValue("");
    setLabel2Value("");
    setLabel3Value("");
    setShowLabels(false);
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>What do you desire</label>
      <br></br>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button onClick={handleButtonClick} style={styles.button}>
        Click for your wish
      </button>
      <button onClick={handleClearButtonClick} style={styles.button}>
        try a new wish
      </button>

      {showLabels && (
        <div style={styles.styles2}>
          <label style={styles.label2}>{label2Value}</label>
          <br></br>
          <label style={styles.label3}>{label3Value}</label>
        </div>
      )}
    </div>
  );
}

export default InputBox;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "100vh",
  },

  styles2: {
    textAlign: "center",
    backgroundColor: "black",
    padding: 10,
  },

  input: {
    padding: 10,
    fontSize: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "grey",
    color: "black",
  },
  button: {
    padding: 10,
    marginBottom: 15,
    fontSize: 20,
    borderRadius: 20,
    backgroundColor: "grey",
    color: "black",
    marginRight: 10,
  },
  label: {
    padding: 15,
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  label2: {
    padding: 10,
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  label3: {
    padding: 10,
    fontSize: 50,
    color: "white",
    textAlign: "end",
  },
};

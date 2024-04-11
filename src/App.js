import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please Enter the Proper value");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You Are UnderWeight");
      } else if (bmi >= 18.5 && bmi <= 25) {
        setMessage("You are Healthy");
      } else {
        setMessage("You are Overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h3>BMI Calculator</h3>
        <form onSubmit={calcBmi}>
          <div className="l1">
            <label>Weight (in kg)</label>
            <input
              placeholder="enter your weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            ></input>
            <br />
          </div>

          <div className="l2">
            <label>Height (in cm)</label>
            <input
              placeholder="enter your height"
              value={height}
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            ></input>
            <br />
          </div>

          <div className="b3">
            <button className="btn-1" type="submit">
              Get BMI
            </button>
            <button className="btn-2 btn-outline" type="submit" onClick={reload}>
              Refresh
            </button>
          </div>
        </form>

        <div className="center">
          <p>BMI : {bmi}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";

export default function ChannelName({ inputCount }) {
  const [formState, setFormState] = useState({});

  const generateInputs = () => {
    const inputs = [];

    if (inputCount) {
      for (let i = 1; i <= inputCount; i++) {
        const inputName = `input${i}`;
        inputs.push(
          <div>
            <label>Channel Name</label>
            <input
              className="bg-white text-black p-1 m-2"
              key={inputName}
              type="text"
              name={inputName}
              value={formState[inputName] || ""}
              onChange={handleInputChange}
            />
          </div>
        );
      }
    }

    return inputs;
  };
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form verileri: ", formState);
  };

  return (
    <div className="text-white flex m-1 p-2 w-auto  ">
      <form onSubmit={handleSubmit}>
        {generateInputs()}
        <button
          className="bg-blue-500 my-5  w-full h-11 p-3 rounded hover:bg-blue-300 transition duration-500 ease-in-out"
          type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

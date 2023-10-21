import React from "react";

export default function Settings() {
  const settingHandler = () => {
    console.log("settings");
  };

  return (
    <div className="bg-blue-500 absolute bottom-4 right-10 w-24 h-24 rounded-full cursor-pointer">
      <button onClick={settingHandler} type="button" className="h-full w-full">
        Settings
      </button>
    </div>
  );
}

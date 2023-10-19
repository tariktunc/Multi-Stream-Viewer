import React from "react";
import Image from "next/image";

export default function Settings({ displaySetting }) {
  return (
    <div className="absolute bottom-0 left-1/2 opacity-90">
      <button
        className="bg-blue-500 my-5 p-3 h-10 w-24 rounded flex justify-center items-center hover:bg-blue-300 transition duration-500 ease-in-out"
        onClick={displaySetting}>
        <Image
          alt="settings"
          className="bg-white"
          src={"/settingsSvg.svg"}
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}

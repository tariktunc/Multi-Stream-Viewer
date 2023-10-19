"use client";
import React from "react";
import ChannelName from "@/Components/ChannelName/channelName";

export default function Setting({ displaySetting }) {
  return (
    <div className="bg-gray-500 absolute right-0 top-1/3 w-90 h-96">
      <ChannelName inputCount={4} />

      <div className=" w-20 h-10 flex justify-center items-center">
        <button
          className="bg-blue-500 my-5 w-full h-11 p-3 rounded hover:bg-blue-300 transition duration-500 ease-in-out"
          onClick={displaySetting}>
          Exit
        </button>
      </div>
    </div>
  );
}

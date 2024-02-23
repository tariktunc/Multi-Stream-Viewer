"use client";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";

import SettingButton from "@/app/Components/SettingButton";
import SettingWindow from "@/app/Components/SettingWindow";
import Loading from "@/app/Components/Loading";

export default function Home() {
  const [viewSettingWindow, setViewSettingWindow] = useState(false);
  const [activeChannel, setActiveChannel] = useState(4);
  const [data, setData] = useState([]);

  const channelGrid = (e) => {
    switch (e) {
      case 1:
        return "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-content-center align-items-center m-0";
      case 4:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-content-center align-items-center m-0";
      case 9:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-content-center align-items-center m-0";
      case 16:
        return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 justify-content-center align-items-center m-0";
      default:
        return "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-content-center align-items-center m-0";
    }
  };

  useEffect(() => {
    const storedChannels = localStorage.getItem("channelKey");
    const storedButton = localStorage.getItem("buttonKey");
    if (storedChannels) {
      const parsedChannels = JSON.parse(storedChannels);
      const parsedButton = JSON.parse(storedButton);
      setActiveChannel(parsedButton);
      setData(parsedChannels);
      console.log("localStorage ", parsedChannels);
      console.log("localStorage ", parsedButton);
    } else {
      console.log("localStorage'da kayitli kanallar bulunamadi.");
    }
  }, []);

  return (
    <main>
      <div className="msk-container">
        <div className={`${channelGrid(activeChannel)}`}>
          <Suspense fallback={<Loading />}>
            {data.slice(0, activeChannel || parsedButton).map((channel) => (
              <div key={channel.id} className="col text-center p-0">
                <iframe
                  className="d-grid"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${channel.name}?autoplay=1&mute=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
      {viewSettingWindow ? (
        <SettingWindow
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel}
          data={data}
          setData={setData}
          setViewSettingWindow={setViewSettingWindow}
        />
      ) : (
        <SettingButton setViewSettingWindow={setViewSettingWindow} />
      )}
    </main>
  );
}

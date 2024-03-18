"use client";
import React from "react";
import { Suspense } from "react";
import { Box, Flex, Text, Avatar } from "@radix-ui/themes";

import Loading from "@/app/Components/Loading/Loading";
import Setting from "./Components/Setting";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Iframe from "./Components/Iframe/Iframe";
export default function Home() {
  const [activeChannel, setActiveChannel] = React.useState(4);
  const [data, setData] = React.useState([]);
  const [videoId, setVideoId] = React.useState([
    { id: 1, name: "OypUpUTYAHI", platform: "youtube" },
    { id: 2, name: "pWbTBJH8k4k", platform: "youtube" },
    { id: 3, name: "2e0DZuMlU8k", platform: "youtube" },
    { id: 4, name: "ur20fjIDphA", platform: "youtube" },
    { id: 5, name: "21X5lGlDOfg", platform: "youtube" },
    { id: 6, name: "6BX-NUzBSp8", platform: "youtube" },
    { id: 7, name: "qiHa_L1mbig", platform: "youtube" },
    { id: 8, name: "garBdyAGmz8", platform: "youtube" },
    { id: 9, name: "w9uJg68CV4g", platform: "youtube" },
    { id: 10, name: "YDfiTGGPYCk", platform: "youtube" },
    { id: 11, name: "hHSmBJk6w0c", platform: "youtube" },
    { id: 12, name: "JbT4oD65LZI", platform: "youtube" },
    { id: 13, name: "xRPjKQtRXR8", platform: "youtube" },
    { id: 14, name: "2i8lfP9oqvk", platform: "youtube" },
    { id: 15, name: "RLEKowJq14U", platform: "youtube" },
    { id: 16, name: "GDb_j9sn2UQ", platform: "youtube" },
  ]);

  const channelGrid = (e) => {
    switch (e) {
      case 1:
        return "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-content-center align-items-center m-0";
      case 4:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-content-center align-items-center m-0";
      case 9:
        return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-content-center align-items-center m-0";
      case 16:
        return "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 justify-content-center align-items-center m-0";
      default:
        return "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-content-center align-items-center m-0";
    }
  };

  React.useEffect(() => {
    try {
      if (localStorage.getItem("channelKey") === null) {
        localStorage.setItem("buttonKey", JSON.stringify(activeChannel));
      }
    } catch (e) {
      console.log("Hata App.js içerisinde", e);
    }
    const storedChannels = localStorage.getItem("channelKey");
    const storedButton = localStorage.getItem("buttonKey");
    if (storedChannels) {
      const parsedChannels = JSON.parse(storedChannels);
      const parsedButton = JSON.parse(storedButton);
      setActiveChannel(parsedButton);
      setData(parsedChannels);
    } else {
      console.log("localStorage'da kayitli kanallar bulunamadi.");
    }
  }, []);

  return (
    <main>
      {/* //* Welcome Screen */}
      {/* //* zindex globalcss de tanımlamıştır. "-1" */}
      <WelcomePage />

      {/* Youtube Screen */}
      <div
        className={`aspect-video max-h-screen max-w-screen m-auto h-auto ${channelGrid(
          activeChannel
        )}`}
      >
        <Suspense fallback={<Loading />}>
          {data.slice(0, activeChannel || parsedButton).map((channel) => (
            <Iframe
              key={channel.id}
              platform={channel.platform}
              channelName={channel.name}
              id="2"
            />
          ))}
        </Suspense>
      </div>

      {/* Setting Screen */}
      <Suspense fallback={<p>loading...</p>}>
        <Setting
          setVideoId={setVideoId}
          videoId={videoId}
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel}
          data={data}
          setData={setData}
        />
      </Suspense>
    </main>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Box, Flex, Text, Avatar } from "@radix-ui/themes";

import SettingButton from "@/app/Components/SettingButton";
import SettingWindow from "@/app/Components/SettingWindow";
import Loading from "@/app/Components/Loading";

export default function Home() {
  const [viewSettingWindow, setViewSettingWindow] = useState(false);
  const [activeChannel, setActiveChannel] = useState(4);
  const [data, setData] = useState([]);
  const [videoId, setVideoId] = useState([
    { id: 1, name: "OypUpUTYAHI" },
    { id: 2, name: "pWbTBJH8k4k" },
    { id: 3, name: "2e0DZuMlU8k" },
    { id: 4, name: "ur20fjIDphA" },
    { id: 5, name: "21X5lGlDOfg" },
    { id: 6, name: "6BX-NUzBSp8" },
    { id: 7, name: "qiHa_L1mbig" },
    { id: 8, name: "garBdyAGmz8" },
    { id: 9, name: "w9uJg68CV4g" },
    { id: 10, name: "YDfiTGGPYCk" },
    { id: 11, name: "hHSmBJk6w0c" },
    { id: 12, name: "JbT4oD65LZI" }, // x
    { id: 13, name: "xRPjKQtRXR8" },
    { id: 14, name: "2i8lfP9oqvk" },
    { id: 15, name: "RLEKowJq14U" },
    { id: 16, name: "GDb_j9sn2UQ" },
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

  useEffect(() => {
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
      {/* Welcome Screen */}
      {/* zindex globalcss de tanımlamıştır. "-1" */}
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        className="zindex"
      >
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          height={"100%"}
        >
          <Flex gap="2">
            <Avatar size={"7"} src="/blakfyLogo.jpg" fallback="logo" />
          </Flex>
          <Text>Welcome to Multi Channel</Text>
          <Text>
            Please adjust your user channel &rdquo;settings&rdquo; and press the
            &rdquo;Save&rdquo; button to save the changes.
          </Text>
        </Flex>
      </Box>

      {/* Youtube Screen */}
      <div
        className={`aspect-video max-h-screen max-w-screen m-auto h-auto ${channelGrid(
          activeChannel
        )}`}
      >
        <Suspense fallback={<Loading />}>
          {data.slice(0, activeChannel || parsedButton).map((channel) => (
            <iframe
              className="aspect-video"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${channel.name}?autoplay=1&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ))}
        </Suspense>
      </div>

      {/* Setting Screen */}
      {viewSettingWindow ? (
        <SettingWindow
          setVideoId={setVideoId}
          videoId={videoId}
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

"use client";
import React, { useState, useEffect } from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import Save from "./SettingWindow/save";
import Inputs from "./SettingWindow/inputs";
import Headers from "./SettingWindow/headers";
import Buttons from "./SettingWindow/buttons";

export default function SettingWindow(props) {
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

  const clickSave = () => {
    console.log("click");
    props.setData(videoId);
    localStorage.setItem("channelKey", JSON.stringify(videoId));
  };

  const onChangeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setVideoId((prevVideoId) => {
      const updatedVideoId = prevVideoId.map((item) =>
        item.id.toString() === id ? { ...item, name: value } : item
      );
      return updatedVideoId;
    });
  };

  const defaultCookie = () => {
    localStorage.clear();
    window.location.reload();
  };

  const fullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  useEffect(() => {
    try {
      const localStorageData = localStorage.getItem("channelKey");
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        setVideoId(parsedData);
        props.setData(parsedData);
      } else {
        const parsedData = JSON.stringify(videoId);
        localStorage.setItem("channelKey", parsedData);
      }
    } catch (error) {
      console.error("localStorage error:", error);
    }
  }, [props.setData]);

  return (
    <div
      className="absolute top-0 right-0 h-screen p-1"
      style={{ background: "color(display-p3 0.068 0.074 0.118)" }}
    >
      <ScrollArea scrollbars="vertical" style={{ height: "100%" }}>
        <Box
          width="100%"
          height="100%"
          style={{
            padding: "var(--space-3)",
            background: "color(display-p3 0.068 0.074 0.118)",
          }}
        >
          {/* headers */}
          <Headers
            setViewSettingWindow={props.setViewSettingWindow}
            fullScreen={fullScreen}
          />
          {/* buttons */}
          <Buttons
            activeChannel={props.activeChannel}
            setActiveChannel={props.setActiveChannel}
          />
          {/* inputs */}
          <Inputs
            handleInputChange={onChangeHandler}
            activeChannel={props.activeChannel}
            setVideoId={setVideoId}
            videoId={videoId}
          />
        </Box>
        {/* Save */}
        <Save clickSave={clickSave} defaultCookie={defaultCookie} />
      </ScrollArea>
    </div>
  );
}

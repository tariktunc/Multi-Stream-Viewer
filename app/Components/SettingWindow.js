import React, { useState, useEffect } from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import Save from "./SettingWindow/save";
import Inputs from "./SettingWindow/inputs";
import Headers from "./SettingWindow/headers";
import Buttons from "./SettingWindow/buttons";

export default function SettingWindow(props) {
  const [videoId, setVideoId] = useState([
    { id: 1, name: "JbT4oD65LZI" },
    { id: 2, name: "JbT4oD65LZI" },
    { id: 3, name: "JbT4oD65LZI" },
    { id: 4, name: "JbT4oD65LZI" },
    { id: 5, name: "JbT4oD65LZI" },
    { id: 6, name: "JbT4oD65LZI" },
    { id: 7, name: "JbT4oD65LZI" },
    { id: 8, name: "JbT4oD65LZI" },
    { id: 9, name: "JbT4oD65LZI" },
    { id: 10, name: "JbT4oD65LZI" },
    { id: 11, name: "JbT4oD65LZI" },
    { id: 12, name: "JbT4oD65LZI" },
    { id: 13, name: "JbT4oD65LZI" },
    { id: 14, name: "JbT4oD65LZI" },
    { id: 15, name: "JbT4oD65LZI" },
    { id: 16, name: "JbT4oD65LZI" },
  ]);

  const clickSave = () => {
    console.log("click");
    props.setData(videoId);
    localStorage.setItem("videoIdKey", JSON.stringify(videoId));
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
      const localStorageData = localStorage.getItem("videoIdKey");
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        setVideoId(parsedData);
        props.setData(parsedData);
      } else {
        const parsedData = JSON.stringify(videoId);
        localStorage.setItem("videoIdKey", parsedData);
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
          <Buttons setActiveChannel={props.setActiveChannel} />
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

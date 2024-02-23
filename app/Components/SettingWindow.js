"use client";
import React, { useState, useEffect } from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import Save from "./SettingWindow/save";
import Inputs from "./SettingWindow/inputs";
import Headers from "./SettingWindow/headers";
import Buttons from "./SettingWindow/buttons";

export default function SettingWindow(props) {
  const clickSave = () => {
    console.log("click");
    props.setData(props.videoId);
    localStorage.setItem("channelKey", JSON.stringify(props.videoId));
  };

  const onChangeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    props.setVideoId((prevVideoId) => {
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
        props.setVideoId(parsedData);
        props.setData(parsedData);
      } else {
        const parsedData = JSON.stringify(props.videoId);
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
            setVideoId={props.setVideoId}
            videoId={props.videoId}
          />
        </Box>
        {/* Save */}
        <Save clickSave={clickSave} defaultCookie={defaultCookie} />
      </ScrollArea>
    </div>
  );
}

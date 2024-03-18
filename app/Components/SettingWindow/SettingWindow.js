import React from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import ChannelsInput from "./ChannelsInput/ChannelsInput";
import ChannelButtonSelector from "./ChannelsButton/ChannelButtonSelector";
import FormButtons from "./FormButtons/FormButtons";
import Headers from "./HeaderContainer/Headers";

export default function SettingWindow(props) {
  const clickSave = () => {
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

  const platformChange = (event) => {
    console.log("log");
  };

  React.useEffect(() => {
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
      className="absolute top-0 right-0 h-screen p-5"
      style={{ background: "color(display-p3 0.068 0.074 0.118)" }}
    >
      <ScrollArea scrollbars="vertical" style={{ height: "100%" }}>
        {/* //? Headers */}
        <Headers setViewSettingWindow={props.setViewSettingWindow} />
        {/* //? ChannelButtonSelector  */}
        <ChannelButtonSelector
          activeChannel={props.activeChannel}
          setActiveChannel={props.setActiveChannel}
        />
        {/* //? Inputs */}
        <Box
          width="100%"
          height="100%"
          style={{
            padding: "var(--space-3)",
            background: "color(display-p3 0.068 0.074 0.118)",
          }}
        >
          {props.videoId.slice(0, props.activeChannel).map((channel, index) => (
            <ChannelsInput
              number={channel.id}
              id={channel.id}
              handleInputChange={onChangeHandler}
              videoId={props.videoId[index].name}
              platformChange={platformChange}
            />
          ))}
        </Box>
        {/* //? SaveBtn */}
        <FormButtons clickSave={clickSave} />
      </ScrollArea>
    </div>
  );
}

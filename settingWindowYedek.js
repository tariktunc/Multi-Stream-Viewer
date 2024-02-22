// 1. yedek.
// 22.02.2024 21:35

import React, { useState, useEffect } from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import Save from "./SettingWindow/save";
import Inputs from "./SettingWindow/inputs";
import Headers from "./SettingWindow/headers";
import Buttons from "./SettingWindow/buttons";

export default function SettingWindow(props) {
   const [onChange, setOnChange] = useState({ id: "", name: "" });

   const handleInputChange = (event) => {
      const newValue = event.target.value;
      const inputId = event.target.id;
      setOnChange({ id: inputId, value: newValue });
      props.channelsData[inputId - 1].name = newValue;
   };

   const setOnSave = (event) => {
      event.preventDefault();
      props.setData(videoId);
      localStorage.setItem("key", JSON.stringify("videoId"));
   };

   useEffect(() => {
      const id = onChange.id;
      const name = onChange.value;
      props.setChannelsData((prev) => {
         return prev.map((channel) => {
            if (channel.id === id) {
               return { ...channel, name: name };
            }
            return channel;
         });

      });
   }, [onChange])

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
               <Headers setViewSettingWindow={props.setViewSettingWindow} />
               {/* buttons */}
               <Buttons setActiveChannel={props.setActiveChannel} />
               {/* inputs */}
               <Inputs handleInputChange={handleInputChange} activeChannel={props.activeChannel} setChannelsData={props.setChannelsData} channelsData={props.channelsData} setOnChange={setOnChange} />
            </Box>
            {/* Save */}
            <Save setOnSave={setOnSave} />
         </ScrollArea>
      </div>
   );
}

import React, { useState, useEffect } from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import Save from "./SettingWindow/save";
import Inputs from "./SettingWindow/inputs";
import Headers from "./SettingWindow/headers";
import Buttons from "./SettingWindow/buttons";

export default function SettingWindow(props) {
   const [onSave, setOnSave] = useState(false);
   const [onChange, setOnChange] = useState({ value: "", id: "" });


   useEffect(() => {
      if (onSave) {
         if(localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            props.setChannelsData(parsedData);
         }
         console.log("Saved!"); 
      }
      setOnSave(false);
   }, [onSave, onChange])
   
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
               <Inputs activeChannel={props.activeChannel} setChannelsData={props.setChannelsData} channelsData={props.channelsData} setOnChange={setOnChange} />
            </Box>
            {/* Save */}
            <Save setOnSave={setOnSave} />
         </ScrollArea>
      </div>
   );
}

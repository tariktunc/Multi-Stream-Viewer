"use client";

import { Tooltip, IconButton } from "@radix-ui/themes";
import { GearIcon } from "@radix-ui/react-icons";
import React from "react";

export default function SettingButton(props) {
   return (
      <section className="absolute top-2/4 inset-y-0 right-0 z-10">
         <Tooltip content="Add to library">
            <IconButton radius="none" size="4">
               <GearIcon
                  className="cursor-pointer"
                  onClick={() => props.setViewSettingWindow(true)}
               />
            </IconButton>
         </Tooltip>
      </section>
   );
}

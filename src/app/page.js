"use client";
import React, { useState } from "react";
import YoutubeChannels from "@/Components/YoutubeChannels/youtubeChannels";
import Settings from "@/Components/Settings/settings";

export default function Home() {
  return (
    <div>
      <div>VIEW SETTING </div>
      <Settings />
      <YoutubeChannels />
    </div>
  );
}

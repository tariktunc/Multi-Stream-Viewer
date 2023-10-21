"use client";
import React, { useState } from "react";
import YoutubeChannels from "@/youtubeChannels/youtubeChannels";
import Settings from "@/settings/settings";

export default function Home() {
  return (
    <div>
      <Settings />
      <YoutubeChannels />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import YoutubeLive from "@/Components/youtubeLive/youtubeLive";
import Settings from "@/Components/Settings/settings";
import Setting from "@/Components/Settings/Setting/setting";

export default function Home() {
  const [settingDisplay, setSettingDisplay] = useState(false);
  const [settingView, setSettingView] = useState(false);
  return (
    <div>
      {!settingDisplay ? (
        <Settings displaySetting={() => setSettingDisplay(true)} />
      ) : (
        <Setting displaySetting={() => setSettingDisplay(false)} />
      )}

      <YoutubeLive />
    </div>
  );
}

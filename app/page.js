"use client";
import React from "react";
import { Suspense } from "react";
import Loading from "@/app/Components/Loading/Loading";
import Setting from "./Components/Setting";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Iframe from "./Components/Iframe/Iframe";
import { Container } from "@radix-ui/themes";

export default function Home() {
  const [activeChannel, setActiveChannel] = React.useState(4);
  const [data, setData] = React.useState([]);
  const [videoId, setVideoId] = React.useState([
    { id: 1, name: "cavs", platform: "kick" }, // FATİH ALTAYLI
    { id: 2, name: "_kBNdEtVndI", platform: "youtube" }, // PurpleBixi
    { id: 3, name: "ztmY_cCtUl0", platform: "youtube" }, // CUNEYT OZDEMIR
    { id: 4, name: "7HN-D5yXtiw", platform: "youtube" }, // SOZCU
    { id: 5, name: "-Lrxv1_i3qc", platform: "youtube" }, // TRT HABER
    { id: 6, name: "DbQ4HGgr7Xo", platform: "youtube" }, // A HABER
    { id: 7, name: "VXMR3YQ7W3s", platform: "youtube" }, // HALK TV
    { id: 8, name: "RNVNlJSUFoE", platform: "youtube" }, // HABERGLOBAL
    { id: 9, name: "ZSWPj9szKb8", platform: "youtube" }, // TGRT HABER
    { id: 10, name: "ztmY_cCtUl0", platform: "youtube" }, // NTV
    { id: 11, name: "6BX-NUzBSp8", platform: "youtube" }, // TV 100
    { id: 12, name: "tR0n3m6FqKo", platform: "youtube" }, // ULUSAL KANAL
    { id: 13, name: "fNqmmqNNGp8", platform: "youtube" }, // TV NET
    { id: 14, name: "AkPjHCeQ3io", platform: "youtube" }, // 24 TV
    { id: 15, name: "XihyuKSyUD0", platform: "youtube" }, // TELE 1
    { id: 16, name: "Fr0Dku2UZmI", platform: "youtube" },
  ]);

  const channelGrid = (e) => {
    switch (e) {
      case 1:
        return "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-content-center align-items-center m-0";
      case 4:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-content-center align-items-center m-0";
      case 9:
        return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-content-center align-items-center m-0";
      case 16:
        return "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 justify-content-center align-items-center m-0";
      default:
        return "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-content-center align-items-center m-0";
    }
  };

  React.useEffect(() => {
    try {
      if (localStorage.getItem("channelKey") === null) {
        localStorage.setItem("buttonKey", JSON.stringify(activeChannel));
      }
    } catch (e) {
      console.log("Hata App.js içerisinde", e);
    }
    const storedChannels = localStorage.getItem("channelKey");
    const storedButton = localStorage.getItem("buttonKey");
    if (storedChannels) {
      const parsedChannels = JSON.parse(storedChannels);
      const parsedButton = JSON.parse(storedButton);
      setActiveChannel(parsedButton);
      setData(parsedChannels);
    } else {
      console.log("localStorage'da kayitli kanallar bulunamadi.");
    }
  }, []);

  return (
    <main>
      {/* //* Welcome Screen */}
      {/* //* zindex globalcss de tanımlamıştır. "-1" */}
      <WelcomePage />

      {/* Youtube Screen */}
      <div
        className={`aspect-video max-h-screen max-w-screen m-auto h-auto ${channelGrid(
          activeChannel
        )}`}
      >
        <Suspense fallback={<Loading />}>
          {data.slice(0, activeChannel || parsedButton).map((channel) => (
            <Iframe
              key={channel.id}
              platform={channel.platform}
              channelName={channel.name}
              id="2"
            />
          ))}
        </Suspense>
      </div>

      {/* Setting Screen */}
      <Suspense fallback={<p>loading...</p>}>
        <Setting
          setVideoId={setVideoId}
          videoId={videoId}
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel}
          data={data}
          setData={setData}
        />
      </Suspense>
    </main>
  );
}

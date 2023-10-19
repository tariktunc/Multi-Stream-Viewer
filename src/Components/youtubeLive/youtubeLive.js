"use client";
import React from "react";
import { useState } from "react";

export default function YoutubeLive() {
  const [numChannels, setNumChannels] = useState(16);
  const [channelIds, setChannelIds] = useState([
    "sd94keSra6A", //TRT
    "sd94keSra6A", //Cuneyt Ozdemir Canli SECIM OZEL
    "sd94keSra6A", //HT
    "sd94keSra6A", //bloombergHT
    "sd94keSra6A", //hbrglobal
    "sd94keSra6A", //NTV
    "sd94keSra6A", //TV100
    "sd94keSra6A", //TGRT
    "sd94keSra6A", //tv100
    "sd94keSra6A", //BNGUTV
    "sd94keSra6A", //ULUSAL
    "sd94keSra6A", //Kanal 24 tv
    "sd94keSra6A", //TVNET
    "sd94keSra6A", //ULKE ! HATALI
    "sd94keSra6A", //Halk Tv
    "sd94keSra6A", //CNN
  ]);

  const generateIframes = () => {
    let frames = [];
    for (let i = 0; i < numChannels; i++) {
      frames.push(
        <div className="w-[100%] h-[100%]">
          <iframe
            key={i}
            src={`https://www.youtube.com/embed/${channelIds[i]}?autoplay=1&mute=1`}
            // frameBorder="0"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return frames;
  };

  return (
    <div
      className="h-screen w-screen grid
      mini:grid-cols-1
      mobile:grid-cols-2
      tablet:grid-cols-3 
      laptop:grid-cols-4
      2xl:grid-cols-5
  ">
      {/* {generateIframes()} */}
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import SettingButton from "@/app/Components/SettingButton";
import SettingWindow from "@/app/Components/SettingWindow";
import { channelsData } from "@/app/Components/channelsData";

export default function Home() {
   const [viewSettingWindow, setViewSettingWindow] = useState(true);
   const [activeChannel, setActiveChannel] = useState(4);

	return (
		<main>
			<div className="msk-container">
				<div className="grid grid-cols-4 justify-content-center align-items-center m-0">
					{channelsData.slice(0, activeChannel).map((channel) => (
						<div key={channel.id} className="col text-center p-0">
							<iframe
								className="d-grid"
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${channel.name}?autoplay=1&mute=1`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							></iframe>
						</div>
					))}
				</div>
			</div>
			{viewSettingWindow ? (
				<SettingWindow activeChannel={activeChannel} setActiveChannel={setActiveChannel} setViewSettingWindow={setViewSettingWindow} />
			) : (
				<SettingButton setViewSettingWindow={setViewSettingWindow} />
			)}
		</main>
	);
}

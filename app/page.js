"use client";
import React, { useState, useEffect } from "react";
import SettingButton from "@/app/Components/SettingButton";
import SettingWindow from "@/app/Components/SettingWindow";

export default function Home() {
	const [viewSettingWindow, setViewSettingWindow] = useState(true);
	const [activeChannel, setActiveChannel] = useState(4);
	const [channelsData, setChannelsData] = useState ([
		{ id: 1, name: "JbT4oD65LZI" },
		{ id: 2, name: "JbT4oD65LZI" },
		{ id: 3, name: "JbT4oD65LZI" },
		{ id: 4, name: "JbT4oD65LZI" },
		{ id: 5, name: "JbT4oD65LZI" },
		{ id: 6, name: "JbT4oD65LZI" },
		{ id: 7, name: "JbT4oD65LZI" },
		{ id: 8, name: "JbT4oD65LZI" },
		{ id: 9, name: "JbT4oD65LZI" },
		{ id: 10, name: "JbT4oD65LZI" },
		{ id: 11, name: "JbT4oD65LZI" },
		{ id: 12, name: "JbT4oD65LZI" },
		{ id: 13, name: "JbT4oD65LZI" },
		{ id: 14, name: "JbT4oD65LZI" },
		{ id: 15, name: "JbT4oD65LZI" },
		{ id: 16, name: "JbT4oD65LZI" },
	 ]);
	const channelGrid = (e) => {
		switch (e) {
			case 1:
				return "grid-cols-1";
			case 4:
				return "grid-cols-2";
			case 9:
				return "grid-cols-3";
			case 16:
				return "grid-cols-4";
			default:
				return "grid-cols-1";
		}
	}

	useEffect(() => {
		localStorage.setItem("channelsData", JSON.stringify(channelsData));
	}, [channelsData]);

	return (
		<main>
			<div className="msk-container">
				<div className={`grid ${channelGrid(activeChannel)} justify-content-center align-items-center m-0`}>
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
				<SettingWindow activeChannel={activeChannel} setActiveChannel={setActiveChannel} channelsData={channelsData} setChannelsData={setChannelsData} setViewSettingWindow={setViewSettingWindow} />
			) : (
				<SettingButton setViewSettingWindow={setViewSettingWindow} />
			)}
		</main>
	);
}

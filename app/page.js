"use client";
import React, { useState, useEffect } from "react";
import SettingButton from "@/app/Components/SettingButton";
import SettingWindow from "@/app/Components/SettingWindow";

export default function Home() {
	const [viewSettingWindow, setViewSettingWindow] = useState(true);
	const [activeChannel, setActiveChannel] = useState(4);
	const [data, setData] = useState([]);

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
	};


	return (
		<main>
			<div className="msk-container">
				<div className={`grid ${channelGrid(activeChannel)} justify-content-center align-items-center m-0`}>
					{data.slice(0, activeChannel).map((channel) => (
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
				<SettingWindow activeChannel={activeChannel} setActiveChannel={setActiveChannel} data={data} setData={setData} setViewSettingWindow={setViewSettingWindow} />
			) : (
				<SettingButton setViewSettingWindow={setViewSettingWindow} />
			)}
		</main>
	);
}

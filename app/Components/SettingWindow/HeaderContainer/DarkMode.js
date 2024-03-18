import React from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function DarkMode() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      {darkMode ? (
        <MoonIcon
          width={30}
          height={20}
          className="cursor-pointer"
          title="dark mode"
          onClick={() => setDarkMode(false)}
        />
      ) : (
        <SunIcon
          width={30}
          height={20}
          className="cursor-pointer"
          title="light mode"
          onClick={() => setDarkMode(true)}
        />
      )}
    </>
  );
}

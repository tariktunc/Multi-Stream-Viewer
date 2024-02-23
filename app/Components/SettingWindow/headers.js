import React from "react";
import { Box, Flex, Heading, Theme } from "@radix-ui/themes";
import {
  Cross1Icon,
  EnterFullScreenIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";

export default function Inputs(props) {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <Flex direction="column">
      <Flex direction="row" justify="end">
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

        <EnterFullScreenIcon
          width={30}
          height={20}
          className="cursor-pointer"
          title="enter full screen"
          onClick={() => props.fullScreen()}
        />
        <Cross1Icon
          width={30}
          height={20}
          className="cursor-pointer"
          title="close"
          onClick={() => props.setViewSettingWindow(false)}
        />
      </Flex>
      <Box p={"2"}>
        <Heading align={"center"} as="h3" size="3">
          Welcome to MultiChannel
        </Heading>
      </Box>
    </Flex>
  );
}

import React from "react";
import { Flex, Heading } from "@radix-ui/themes";
import { Cross1Icon, EnterFullScreenIcon } from "@radix-ui/react-icons";

export default function Inputs(props) {
  return (
    <Flex direction="column">
      <Flex direction="row" justify="end">
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
      <Heading as="h3" size="3">
        Welcome to MultiChannel
      </Heading>
    </Flex>
  );
}

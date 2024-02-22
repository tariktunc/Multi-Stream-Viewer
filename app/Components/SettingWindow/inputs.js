import React from 'react';
import { Flex, Box, Badge, TextField } from "@radix-ui/themes";
import { channelsData } from "@/app/Components/channelsData";

export default function Inputs(props) {

  const formSubmit = (event) => {
    event.preventDefault();
  }
  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Flex direction="column" gap="3" pt="3" style={{ maxWidth: 400 }}>
      {channelsData.slice(0, props.activeChannel).map((channel, index) => (
        <Box key={channel.id}>
          <Flex align="center">
            <Badge size="2">
              {channel.id && channel.id < 10 ? "0" + channel.id : channel.id}
            </Badge>
            <TextField.Input
              id={channel.id}
              size="2"
              pl="2"
              placeholder="Enter Channel ID"
              onChange={(e) => handleInputChange(channel.id, e.target.value)}
            />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}

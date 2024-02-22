import React from 'react';
import { Flex, Box, Badge, TextField } from "@radix-ui/themes";

export default function Inputs(props) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const inputId = event.target.id;
    props.setOnChange({ id: inputId, value: newValue });
    props.channelsData[inputId - 1].name = newValue;
  };


  return (
    <Flex direction="column" gap="3" pt="3">
      {props.channelsData.slice(0, props.activeChannel).map((channel, index) => (
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
              onChange={handleInputChange}
              value={props.channelsData[index].name}
              maxLength={20}
            />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}
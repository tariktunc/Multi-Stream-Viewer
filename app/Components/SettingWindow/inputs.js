import { Flex, Box, Badge, TextField } from "@radix-ui/themes";

export default function Inputs(props) {
  return (
    <Flex direction="column" gap="3" pt="3">
      {props.videoId.slice(0, props.activeChannel).map((channel, index) => (
        <Box key={channel.id}>
          <Flex align="center">
            <Badge variant="surface" color={"yellow"} size="2">
              {channel.id && channel.id < 10 ? "0" + channel.id : channel.id}
            </Badge>
            <TextField.Input
              id={channel.id}
              size="2"
              pl="2"
              placeholder="Enter Channel ID"
              onChange={props.handleInputChange}
              value={props.videoId[index].name}
              maxLength={20}
            />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}

import { Box, Flex, Text, Avatar } from "@radix-ui/themes";

export default function WelcomePage() {
  return (
    <Box
      position={"absolute"}
      width={"100%"}
      height={"100%"}
      className="zindex"
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        height={"100%"}
      >
        <Flex gap="2">
          <Avatar size={"7"} src="/blakfyLogo.jpg" fallback="logo" />
        </Flex>
        <Text>Welcome to Multi Channel</Text>
        <Text>
          Please adjust your user channel &rdquo;settings&rdquo; and press the
          &rdquo;Save&rdquo; button to save the changes.
        </Text>
      </Flex>
    </Box>
  );
}

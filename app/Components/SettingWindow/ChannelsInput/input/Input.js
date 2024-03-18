import { TextField } from "@radix-ui/themes";

export default function Input(props) {
  return (
    <TextField.Input
      id={props.id}
      size="2"
      pl="2"
      placeholder="Enter Channel ID"
      onChange={props.handleInputChange}
      value={props.videoId}
      maxLength={20}
    />
  );
}

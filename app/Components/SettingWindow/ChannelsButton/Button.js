import { Button } from "@radix-ui/themes";

export default function ChannelsButton(props) {
  return (
    <Button
      key={props.key}
      size="2"
      variant="surface"
      onClick={() => {
        props.setActiveChannel(props.key), props.onClickHandler(props.key);
      }}
    >
      {props.name}
    </Button>
  );
}

import { Select } from "@radix-ui/themes";

export default function Platform(props) {
  return (
    <form onChange={props.platformChange} className="ml-3">
      <Select.Root size="2" defaultValue="youtube">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="youtube">Youtube</Select.Item>
          <Select.Item value="twitch">Twitch</Select.Item>
          <Select.Item value="kick">Kick</Select.Item>
        </Select.Content>
      </Select.Root>
    </form>
  );
}

import { Button, Flex } from "@radix-ui/themes";
import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";

export default function Save(props) {
  return (
    <Flex direction="column" px="9" gap="3">
      <Button
        onClick={() => {
          props.clickSave();
        }}
        variant="soft"
      >
        <CheckIcon className="cursor-pointer" />
        SAVE
      </Button>
      <Button
        onClick={() => {
          props.defaultCookie();
        }}
        variant="soft"
      >
        <TrashIcon className="cursor-pointer" />
        Clear Cookie
      </Button>
    </Flex>
  );
}

import { Button, Flex, alertDialogContentPropDefs } from "@radix-ui/themes";
import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";

export default function Save(props) {
  function myFunction() {
    let text = "Are you sure you want to clear the cookie?";
    if (confirm(text) == true) {
      props.defaultCookie();
    } else {
      alert("You pressed Cancel!");
    }
  }
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
      <Button onClick={() => myFunction()} variant="soft">
        <TrashIcon className="cursor-pointer" />
        Clear Cookie
      </Button>
    </Flex>
  );
}

import React, { useEffect } from "react";
import { Box, Flex, Button } from "@radix-ui/themes";

export default function Inputs(props) {
  const buttonData = [
    { id: 1, name: "1" },
    { id: 4, name: "4" },
    { id: 9, name: "9" },
    { id: 16, name: "16" },
  ];

  const onClickHandler = (e) => {
    localStorage.setItem("buttonKey", JSON.stringify(e));
  };

  return (
    <Flex justify={"center"} p="1" gap="3">
      {buttonData &&
        buttonData.map((btn) => (
          <Button
            key={btn.id}
            size="2"
            variant="soft"
            highContrast
            // Page.js sayfasından SettingWindow.js aktarılarak burada kullanıldı.
            onClick={() => {
              props.setActiveChannel(btn.id), onClickHandler(btn.id);
            }}
          >
            {btn.name}
          </Button>
        ))}
    </Flex>
  );
}

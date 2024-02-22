import React from 'react'
import { Flex, Button } from "@radix-ui/themes";

export default function Inputs(props) {
    const buttonData = [
        {id: 1, name: "1"},
        {id: 4, name: "4"},
        {id: 9, name: "9"},
        {id: 16, name: "16"},
    ];

    return (
        <Flex pt="2" gap="3">
            {buttonData &&
                buttonData.map((btn) => (
                    <Button
                        key={btn.id}
                        size="2"
                        color="indigo"
                        variant="soft"
                        // Page.js sayfasından SettingWindow.js aktarılarak burada kullanıldı.
                        onClick={() => props.setActiveChannel(btn.id)}
                    >
                        {btn.name}
                    </Button>
                ))}
        </Flex>
    )
}

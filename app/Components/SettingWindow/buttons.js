import React from 'react'
import { Flex, Button } from "@radix-ui/themes";
import { buttonData } from "@/app/Components/buttonData";

export default function Inputs(props) {
    return (
        <Flex align="center" pt="2" justify="center" gap="3">
            {buttonData &&
                buttonData.map((btn) => (
                    <Button
                        key={btn.id}
                        size="2"
                        color="indigo"
                        variant="soft"
                        onClick={() => props.setActiveChannel(btn.id)}
                    >
                        {btn.name}
                    </Button>
                ))}
        </Flex>
    )
}

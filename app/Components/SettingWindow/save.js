import React from 'react'
import { Button, Flex } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Save (props) {
    return (
        <>
            <Flex direction="column" px="9" gap="3">
                <Button
                    onClick={() => {
                    props.setOnSave(true)}}
                    color="indigo" variant="soft">
                    <CheckIcon
                        className="cursor-pointer"
                    />
                    SAVE
                </Button>
            </Flex>
        </>
    )
}

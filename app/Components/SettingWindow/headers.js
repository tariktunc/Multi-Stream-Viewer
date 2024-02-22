import React from 'react'
import { Flex, Heading } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function Inputs(props) {
    return (
               <Flex >
                  <Heading as="h3" size="3">
                     Welcome to MultiChannel
                  </Heading>
                  <Cross1Icon
                     className="cursor-pointer w-10 h-5"
                     onClick={() => props.setCloseWindow(false)}
                  />
               </Flex>
    )
}

import React from "react"
import { Text, FlexProps, Box } from "@chakra-ui/react"
import { FiCheckSquare } from "react-icons/fi"

const FootNote = ({children}: FlexProps) => {
    return (
        <Text fontSize={12} color='gray.700' fontStyle='italic'>
            <Box mr={1} display='inline' as={FiCheckSquare} />
            {children}
        </Text>
    )
}

export default FootNote
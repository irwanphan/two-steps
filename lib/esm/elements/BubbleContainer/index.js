import React from "react";
import { Box } from "@chakra-ui/react";
const BubbleContainer = ({ children, ...rest }) => {
    return (React.createElement(Box, { borderRadius: '2rem', borderStyle: 'solid', borderColor: 'gray.800', borderWidth: '1px 2px 3px 1px', bg: 'whiteAlpha.700', role: 'group', transition: '.3s ease all', p: 8, _hover: {
            shadow: 'lg'
        }, ...rest }, children));
};
export default BubbleContainer;

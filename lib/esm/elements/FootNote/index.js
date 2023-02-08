import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { FiCheckSquare } from "react-icons/fi";
const FootNote = ({ children }) => {
    return (React.createElement(Text, { fontSize: 12, color: 'gray.700', fontStyle: 'italic' },
        React.createElement(Box, { mr: 1, display: 'inline', as: FiCheckSquare }),
        children));
};
export default FootNote;

import React from "react";
import { HStack, Circle, Text, Box } from "@chakra-ui/react";
const IconicTitle = ({ icon, hoverColor, children, ...rest }) => {
    return (React.createElement(Box, { position: 'absolute', top: 4, role: 'group', ...rest },
        React.createElement(HStack, null,
            React.createElement(Circle, { as: icon, transition: '.4s ease all', borderStyle: 'solid', borderColor: 'gray.800', borderWidth: '1px 2px 3px 1px', size: 8, p: 1, bg: { base: `${hoverColor}`, md: 'white' }, position: 'relative', top: { base: '-1.5', md: '0' }, _groupHover: {
                    bg: `${hoverColor}`,
                    top: '-1.5'
                } }),
            React.createElement(Text, { fontSize: 20, fontWeight: 700, position: 'relative', top: -2, letterSpacing: 1 }, children))));
};
export default IconicTitle;

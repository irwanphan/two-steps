import React from "react";
import { Heading } from '@chakra-ui/react';
import { Fragment } from 'react';
const PageTitle = ({ children }) => {
    return (React.createElement(Fragment, null,
        React.createElement(Heading, { as: 'h2', size: 'md', textTransform: 'capitalize', color: 'gray.700', w: 'full', fontWeight: 700, mb: 6, letterSpacing: 0.5 }, children)));
};
export default PageTitle;

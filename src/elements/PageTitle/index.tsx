import React from "react"
import { 
    FlexProps, 
    Heading
} from '@chakra-ui/react';
import { Fragment, ReactNode } from 'react';

interface PageTitleProps extends FlexProps {
    children: ReactNode;
}
const PageTitle = ({ children }: PageTitleProps) => {
    return (
        <Fragment>
            <Heading 
                as='h2' 
                size='md'
                textTransform='capitalize'
                color='gray.700'
                w='full'
                fontWeight={700}
                mb={6}
                letterSpacing={0.5}
            >
                { children }
            </Heading>
        </Fragment>
    );
};

export default PageTitle
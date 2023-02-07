import { Box, FlexProps, Text } from "@chakra-ui/react"

interface PageSectionProps extends FlexProps {
    legend?: string
}

const BlockSection = ({legend, children, ...rest}:PageSectionProps) => {
    return (
        <Box
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            bgSize='cover'
            bgColor='white'
            alignContent='center'
            position='relative' 
            px={{ base: 4, md: 8 }}
            py={{ base: 6, md: 6 }}
            mb={6}
            role='group'
            w='full'
            borderWidth='2px'
            borderBottomWidth='2px'
            borderColor='gray.200'
            borderStyle='solid'
            rounded='xl'
            shadow='sm'
            _hover={{
                borderColor: 'green.200',
                shadow:'lg'
            }}
            _focus={{
                borderColor: 'green.200',
                boxShadow: 'md'
            }}
            transition='0.3s ease all'
            {...rest}
        >
            {
                legend &&
                <Text position='absolute'
                    fontSize={12}
                    fontWeight={700}
                    letterSpacing={0.5}
                    color='gray.700'
                    bg='whiteAlpha.800'
                    top={-3}
                    px={2} py={0.5} 
                    borderWidth='1px'
                    borderBottomWidth='2px'
                    borderColor='gray.200'
                    borderStyle='solid'
                    rounded='lg'
                    _groupHover={{
                        borderColor: 'green.200'
                    }}
                    _groupFocus={{
                        borderColor: 'green.200'
                    }}
                    transition='0.3s ease all'
                    >{legend}
                </Text>
            }
            {children}
        </Box>
    )
} 

export default BlockSection
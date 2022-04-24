import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import { Box, HStack, useToast, Heading, Flex, ChakraProvider, Slide} from '@chakra-ui/react'
import { CelsiusTheme } from '../style/theme.js';


function Dashboard() {


    const toast = useToast()
    useEffect(() => {

        const timeout = setTimeout(() => {
            toast({
                render: () => (
                    <Flex color='white' bg='teal' borderRadius={10} justifyContent='center' >
                        <Heading p='10' fontSize='20px'>Welcome Back!</Heading>
                    </Flex>
                ),
                duration: 1000,
                isClosable: true,
                position: 'bottom'
            })
        }, 1000)

        return () => clearTimeout(timeout)
    })


    return (
        <ChakraProvider theme={CelsiusTheme}>
            <Box w='100vw' h='100vh'>
            <HStack spacing='110'>
                <Slide direction='left' in={true}>
                    <Sidebar />
                </Slide>
                <Flex w='100vw'>
                    <Box
                        borderColor='primary'
                        borderWidth='1px'
                        h='90vh'
                        w='99%'
                        p='25'
                        justifyContent='center'
                        mt='5'
                        borderRadius='20'>
                        Dashboard
                    </Box>
                </Flex>
            </HStack>
            </Box>
        </ChakraProvider>
    );
}

export default Dashboard;
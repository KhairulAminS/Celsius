import React, { useEffect } from 'react'
import Header from '../components/Header';
import { Box, VStack, useToast, Heading, Flex } from '@chakra-ui/react'


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
        <VStack >
            <Header />
            <Box bgColor='transparent' w='100vw' h='80vh' justifyContent='center'>
                Dashboard
            </Box>
        </VStack>
    );
}

export default Dashboard;
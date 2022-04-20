import React, { useEffect } from 'react'
import Header from '../components/Header';
import { Box, VStack, useToast, Heading } from '@chakra-ui/react'

function Dashboard() {

    const toast = useToast()
    useEffect(() => {
        
        const timeout = setTimeout(() => {
            toast({
                render: () => (
                    <Box color='white' p={3} bg='blue.500' borderRadius={5} textAlign='center'>
                      <Heading fontSize='2xl'>Welcome Back!</Heading>
                    </Box>
                  ),
                duration: 1000,
                isClosable: true
            })
          }, 1000)
      
          return () => clearTimeout(timeout)
    })

    return (
        <VStack >
            <Header />
            <Box bgColor='crimson' w='100vw' h='80vh'>
                Dashboard
            </Box>
        </VStack>
    );
}

export default Dashboard;
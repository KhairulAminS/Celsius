import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import { Box, HStack, useToast, Heading, Flex, ChakraProvider, Slide } from '@chakra-ui/react'
import { CelsiusTheme } from '../style/theme.js';
import { useKeycloak } from "@react-keycloak/web";
import DashboardContent from '../components/dashboardContent';
import { Outlet } from 'react-router-dom';



function Dashboard() {

    const { keycloak } = useKeycloak();

    const [ firstName, setFirstName ] = useState('')

    keycloak.loadUserProfile().then(res => { setFirstName(res.firstName) });

    const toast = useToast()
    useEffect(() => {

        const timeout = setTimeout(() => {
            toast({
                render: () => (
                    <Flex color='white' bg='#f15a29' borderRadius={10} justifyContent='center' >
                        <Heading p='10' fontSize='20px'>Welcome Back {firstName} !</Heading>
                    </Flex>
                ),
                duration: 1000,
                isClosable: true,
                position: 'top'
            })
        }, 1000)

        return () => clearTimeout(timeout)
    })


    return (
        <ChakraProvider theme={CelsiusTheme}>
            <Box w='100vw' h='100vh'>
                <HStack spacing='12vh'>
                    <Slide direction='left' in={true}>
                        <Sidebar />
                    </Slide>
                    <Outlet/>
                </HStack>
            </Box>
        </ChakraProvider>
    );
}

export default Dashboard;
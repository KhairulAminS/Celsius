import React from 'react';
import {
    Flex,
    Image,
    ChakraProvider,
    Spacer,
    VStack,
    IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from 'react-router-dom';
import logo from '../asset/Logo short.svg';
import { CgFileDocument } from 'react-icons/cg'
import { FaPowerOff } from 'react-icons/fa'
import { CelsiusTheme } from '../style/theme.js';


function Sidebar() {
    const { keycloak } = useKeycloak();
    let navigateTo = useNavigate();
    return (
        <ChakraProvider theme={CelsiusTheme}>
            <Flex alignItems='flex-start'  p='5' h='100vh'>
                <VStack spacing='50' mt='5'  h='95%'>
                    <Image src={logo} htmlWidth='50vw' ml='-4'/>
                    <IconButton
                        aria-label='Files'
                        icon={<CgFileDocument />}
                        variant='primary'
                    />
                    <Spacer/>
                    <ColorModeSwitcher fontSize='3vh' />
                    <IconButton
                        aria-label='Logout'
                        icon={<FaPowerOff />}
                        variant='ghost'
                        fontSize='3vh'
                        onClick={() => {
                            keycloak.logout(navigateTo('/'))
                        }}
                    />
                </VStack>
            </Flex>
        </ChakraProvider>
    );
}

export default Sidebar;
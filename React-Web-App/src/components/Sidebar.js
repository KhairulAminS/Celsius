import React, { useState } from 'react';
import {
    Flex,
    Image,
    ChakraProvider,
    Spacer,
    VStack,
    IconButton,
    Button,
    Box,
    Tooltip,
    useRadioGroup,
    Icon
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from 'react-router-dom';
import logo from '../asset/Logo short.svg';
import picture from '../asset/sample-profile-pic.png';
import { CgFileDocument } from 'react-icons/cg'
import { FaPowerOff } from 'react-icons/fa'
import { CelsiusTheme } from '../style/theme.js';


function Sidebar() {
    const { keycloak } = useKeycloak();
    let navigateTo = useNavigate();

    return (
        <ChakraProvider theme={CelsiusTheme}>
            <Flex alignItems='flex-start' p='5' h='100vh'>
                <VStack spacing='50' mt='5' h='95%'>
                    <Box as='button' onClick={() => navigateTo("/secured/main")}>
                        <Image src={logo} htmlWidth='60vw' ml='-2' />
                    </Box>
                    <Tooltip hasArrow label="Profile" placement='right' bg='secondary' fontSize='20'>
                        <Box as='button'>
                            <Image
                                src={picture}
                                boxSize='7vh'
                                borderRadius='50%'
                                sx={{
                                    transition: 'all 0.2s ease-out',
                                    _hover: {
                                        borderRadius: '10%'
                                    },
                                }}
                                onClick={() => {
                                    navigateTo("/secured/profile")
                                }}
                            />
                        </Box>
                    </Tooltip>
                    <Tooltip hasArrow label="File Manager" placement='right' bg='secondary' fontSize='20'>
                        <IconButton
                            aria-label='Files'
                            icon={<CgFileDocument />}
                            borderRadius='50%'
                            variant='primary'
                            onClick={() => {
                                navigateTo("/secured/file-manager")
                            }}
                        />
                    </Tooltip>
                    <Spacer />
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
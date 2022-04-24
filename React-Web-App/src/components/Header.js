import React from 'react'
import {
    Flex,
    Button,
    Image,
    ChakraProvider,
    theme,
    Spacer,
    Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import logo from '../asset/Logo.svg';
import { motion } from 'framer-motion'
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from 'react-router-dom';


function Header() {

    const { keycloak } = useKeycloak();
    let navigate = useNavigate();

    return (
        <ChakraProvider theme={theme}>
            <motion.div initial='hidden' animate='slideIn' variants={animVariant}>
                <Flex w='100vw' p='5' align='center'>
                    <Image src={logo} htmlWidth='150' ml='10' />
                    <Spacer />
                    <Button
                        bgColor='transparent'
                        onClick={() => {
                            keycloak.login(navigate("/secured"))
                        }}
                    >
                        {!keycloak.authenticated ? 'Login' : 'To Dashboard'}
                    </Button>
                    {!keycloak.authenticated && (
                        <Button
                            bgColor='transparent'
                            onClick={() => {
                                keycloak.register(navigate("/secured"))
                            }}
                        >
                            Register
                        </Button>
                    )}
                    <ColorModeSwitcher mr='10' />
                </Flex>
                <Divider />
            </motion.div>
        </ChakraProvider >

    );
}

/* Animation Variants */

const animVariant = {
    hidden: {
        y: -100
    },
    slideIn: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
}

export default Header;
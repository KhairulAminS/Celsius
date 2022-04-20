import React from 'react'
import {
    Flex,
    IconButton, 
    Image, 
    ChakraProvider, 
    theme, 
    Spacer, 
    Divider, 
    useDisclosure, 
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { FiMenu } from 'react-icons/fi'
import logo from '../asset/Logo full.svg';
import { motion } from 'framer-motion'
import DisplayDrawer from '../components/Drawer';


function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <ChakraProvider theme={theme}>
            <motion.div initial='hidden' animate='slideIn' variants={animVariant}>
                <Flex w='100vw' p='5' align='center'>
                    <IconButton icon={<FiMenu />} variant="ghost" onClick={onOpen} />
                    <Spacer />
                    <DisplayDrawer onClose={onClose} isOpen={isOpen} />
                    <Image src={logo} htmlWidth='150'/>
                    <Spacer />
                    <ColorModeSwitcher />
                </Flex>
                <Divider />
            </motion.div>
        </ChakraProvider>

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
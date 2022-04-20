import {
  Box, ChakraProvider, Flex, HStack, Image, Tab, TabList,
  TabPanel,
  TabPanels, Tabs, theme
} from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import React from 'react';
import logo from '../asset/Logo full.svg';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { motion } from 'framer-motion';


export default function AuthenticationPage() {
  return (
    <ChakraProvider theme={theme}>
      {Header()}
      <Flex h='full' justifyContent='center' align='center' flexDir='column'>
        {displayLogo()}
        <motion.div initial='hidden' animate='visible' variants={FadeIn}>
          <Box
            borderRadius='15'
            w='30vw'
            h='fit'
            p='10'
            shadow='2xl'>
            {PageController()}
          </Box>
        </motion.div>
      </Flex>
    </ChakraProvider>
  )

  function Header() {
    return <HStack mb='10' justifyContent='flex-end'>
      <ColorModeSwitcher />
    </HStack>;
  }

  function displayLogo() {
    return <motion.div initial='hidden' animate='visible'
      variants={BounceIn}>
      <Image src={logo} htmlWidth='300' mt='5' mb='5' />
    </motion.div>
  }

  function PageController() {
    return <Tabs variant='soft-rounded' align='center' isFitted isLazy>
      <TabList bgColor='gray.100' borderRadius='full' mb='10'>
        <Tab _selected={{ color: 'white', bg: '#f15a29' }}>SIGN IN</Tab>
        <Tab _selected={{ color: 'white', bg: '#f15a29' }}>SIGN UP</Tab>
      </TabList>
      <TabPanels>
        <TabPanel exitBeforeEnter>
          <motion.div initial='Hidden' animate='SlideLeft'
            variants={Tab1AnimVariant}>
            <LoginForm />
          </motion.div>
        </TabPanel>
        <TabPanel exitBeforeEnter>
          <motion.div initial='Hidden' animate='SlideRight'
            variants={Tab2AnimVariant}>
            <RegisterForm />
          </motion.div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  }
}

/*    Animations    */

const FadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .4,
      delay: 0.5,
      ease: 'easeOut'
    }
  }
}

const BounceIn = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      duration: .4
    }
  }
}

const Tab1AnimVariant = {
  Hidden: {
    opacity: 0,
    x: 100
  },
  SlideLeft: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

const Tab2AnimVariant = {
  Hidden: {
    opacity: 0,
    x: -100
  },
  SlideRight: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}
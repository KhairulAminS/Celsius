import React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { Button, Flex, Heading, HStack, VStack, Box, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { motion } from 'framer-motion'
import logo from '../asset/SamplePicture.png';


function Home() {

  const { keycloak } = useKeycloak();
  let navigateTo = useNavigate();

  return (
    <Flex>
      <VStack alignItems='center'>
        <Header />
        <Box>
          <HStack p='50' spacing='100'>
            <motion.div initial='hidden' animate='visible' variants={animVariant}>
              <VStack spacing='50' alignItems='start' >
                <Box maxW='30vw' >
                  <Heading fontSize='4vw' fontFamily='sans-serif' lineHeight='1.2'>A Simple Temperature Monitor</Heading>
                </Box>
                <Box maxW='30vw' fontSize='25'>
                  Nice, clean and simple to use.
                  Celsius is a web application that can help you
                  easily set up monitoring for temperature data.
                  It will let you visualize your data in a nice dashboard,
                  and also predict temperature based on historical data.
                </Box>
                <Button
                  fontSize='30'
                  p='15'
                  borderRadius='10'
                  bgColor='#f15a29'
                  color='white'
                  w='20'
                  onClick={() => keycloak.register(navigateTo('/secured'))}>
                  Get Started
                </Button>
              </VStack>
            </motion.div>
            <Image src={logo} htmlWidth='1000vw' ml='10' />
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
}


/* Animation Variants */

const animVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5
    }
  }
}

export default Home;



import React, { useEffect, useState } from 'react'
import { Box, Image, Flex, Heading, ScaleFade, VStack } from '@chakra-ui/react'
import SimpleTable from '../components/SimpleTable.js';


function MainPage() {

    return (
        <Flex w='100vw'>
            <Box
                h='90vh'
                w='99%'
                p='25'
                justifyContent='center'
                mt='8vh'
                borderRadius='20'>
                <ScaleFade initialScale={0.9} in={true}>
                    <Box>
                        <VStack spacing='5vh'>
                            <Heading alignSelf='start' >
                                Recently Added
                            </Heading>
                            <Box w='100%'>
                                <SimpleTable />
                            </Box>
                            <Heading alignSelf='start'>
                                Recently Viewed
                            </Heading>
                        </VStack>
                    </Box>
                </ScaleFade>
            </Box>
        </Flex>


    );
}

export default MainPage;
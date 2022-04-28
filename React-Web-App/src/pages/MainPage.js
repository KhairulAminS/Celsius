import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, useDisclosure, useToast, ScaleFade } from '@chakra-ui/react'

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
                        This is main page
                    </Box>
                </ScaleFade>
            </Box>
        </Flex>


    );
}

export default MainPage;
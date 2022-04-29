import React from 'react'
import { Box, Heading, Flex, VStack, ScaleFade } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function AnalysisPage() {

    let { id } = useParams();

    return (
        <Flex w='100vw'>
            <VStack
                h='93vh'
                w='99%'
                spacing='5'
                alignItems='start'
                mt='9'>
                <Heading>Analysis</Heading>
                <Box
                    borderColor='primary'
                    borderWidth='1px'
                    h='100vh'
                    w='100%'
                    p='25'
                    borderRadius='20'
                    alignItems='end'>
                    <ScaleFade initialScale={0.9} in={true}>
                        <Flex flexDir='column'>
                            This is analysis page for { id }
                        </Flex>
                    </ScaleFade>
                </Box>
            </VStack>
        </Flex>


    );
}

export default AnalysisPage;
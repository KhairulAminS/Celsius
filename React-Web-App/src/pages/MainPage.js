import React, { useEffect, useState } from 'react'
import { Box, Image, Flex, Heading, ScaleFade, VStack } from '@chakra-ui/react'
import SimpleTable from '../components/SimpleTable.js';
import axios from 'axios';


function MainPage() {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/database')
            .then(function (response) {
                console.log(response.data)
                setRowData(response.data);
            })
    });

    return (
        <Flex w='100vw'>
            <Box
                h='90vh'
                w='99%'
                p='25'
                justifyContent='center'
                mt='5vh'
                borderRadius='20'>
                <ScaleFade initialScale={0.9} in={true}>
                    <Box>
                        <VStack spacing='3vh' alignItems='start'>
                            <Heading >
                                Recently Added
                            </Heading>
                            <Box w='100%'>
                                <SimpleTable rowData={rowData} isAdded={true}/>
                            </Box>
                            <Heading >
                                Recently Viewed
                            </Heading>
                            <Box w='100%'>
                                <SimpleTable rowData={rowData} isAdded={false}/>
                            </Box>
                        </VStack>
                    </Box>
                </ScaleFade>
            </Box>
        </Flex>


    );
}

export default MainPage;
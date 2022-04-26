import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'
import FileUploader from './FileUploader';
import Table from './Table';


function DashboardContent() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex w='100vw'>
            <Box
                borderColor='primary'
                borderWidth='1px'
                h='90vh'
                w='99%'
                p='25'
                justifyContent='center'
                mt='8vh'
                borderRadius='20'>
                <Button color='primary'
                    alignSelf='center'
                    onClick={onOpen}>
                    Upload
                </Button>
                <FileUploader isOpen={isOpen} onClose={onClose} />
                <Box p={5}>
                    <Table />
                </Box>
            </Box>
        </Flex>
    );
}

export default DashboardContent;
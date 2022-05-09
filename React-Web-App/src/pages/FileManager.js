import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, useDisclosure, useToast, ScaleFade, Heading, VStack } from '@chakra-ui/react'
import FileUploader from '../components/FileUploader';
import Table from '../components/Table';
import axios from 'axios';
import cellRenderer from '../components/cellRenderer';


function FileManager() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast = useToast()

    const [columnDefs, setColumnDefs] = useState([
        { field: '', checkboxSelection: true, width:'15', sortable: false, filter: false, },
        { headerName: 'File Name', field: 'filename'},
        { headerName: 'Date Created', field: 'uploadedDate' },
        { headerName: 'Actions', cellRenderer: cellRenderer }
    ]);

    const [rowData, setRowData] = useState([]);

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
        onClose()
        setTimeout(() => {
            toast({
                title: 'File Uploaded',
                description: "File have been uploaded.",
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
        }, 500)

        axios.get('http://localhost:8000/database')
            .then(function (response) {
                console.log(response);
                setRowData(response.data);
            })

    }

    useEffect(() => {
        axios.get('http://localhost:8000/database')
            .then(function (response) {
                console.log(response);
                setRowData(response.data);
            })
    }, []);

    

    return (
        <Flex w='100vw'>
            <VStack
                h='93vh'
                w='99%'
                spacing='5'
                alignItems='start'
                mt='9'>
                <Heading>File Manager</Heading>
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
                            <Button color='primary'
                                onClick={onOpen}
                                alignSelf='flex-end'>
                                Upload
                            </Button>
                            <FileUploader
                                isOpen={isOpen}
                                onClose={onClose}
                                handleSubmit={handleSubmit} />
                            <Box p={5}>
                                <Table
                                    rowData={rowData}
                                    columnDefs={columnDefs} />
                            </Box>
                        </Flex>
                    </ScaleFade>
                </Box>
            </VStack>
        </Flex>
    );
}


export default FileManager;
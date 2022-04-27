import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, useDisclosure, useToast, ScaleFade } from '@chakra-ui/react'
import FileUploader from '../components/FileUploader';
import Table from '../components/Table';
import axios from 'axios';

function ProfilePage() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast = useToast()

    const [columnDefs, setColumnDefs] = useState([
        { headerName: 'File Name', field: 'filename' },
        { headerName: 'Date Created', field: 'uploadedDate' },
    ]);

    const [rowData, setRowData] = useState([]);

    const getUploadParams = ({ meta }) => { return { url: 'http://localhost:8000/database/upload-file' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

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
            <Box
                borderColor='primary'
                borderWidth='1px'
                h='90vh'
                w='99%'
                p='25'
                justifyContent='center'
                mt='8vh'
                borderRadius='20'>
                <ScaleFade initialScale={0.9} in={true}>
                    This is the profile
                </ScaleFade>

            </Box>

        </Flex>


    );
}

export default ProfilePage;
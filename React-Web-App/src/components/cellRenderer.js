import React from 'react';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { FaFolderOpen, FaTable } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios';

export default (props) => {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;


    return (
        <Box>
            <HStack>
                <IconButton aria-label='Open file' icon={<FaFolderOpen />} variant='ghost' fontSize='20' />
                <IconButton aria-label='Open raw data file' icon={<FaTable />} variant='ghost' fontSize='20' />
                <IconButton aria-label='Delete file' icon={<MdDeleteForever />} variant='ghost' fontSize='20' />
            </HStack>
        </Box>
    );
};
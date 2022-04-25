import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

function CreateTable() {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>FileName</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Temperature</Th>
                        <Th >Timestamp</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td >25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td >30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td >0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Temperature</Th>
                        <Th >Timestamp</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}

export default CreateTable;
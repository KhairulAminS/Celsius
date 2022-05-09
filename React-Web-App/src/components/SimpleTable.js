import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Link,
    Box
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import TableMenu from './TableMenu';

function SimpleTable({ rowData, isAdded }) {

    let navigateTo = useNavigate();

    const history = [];

    const minLimitRow = rowData.length < 5 ? 0 : rowData.length - 5;

    return (
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th >Filename</Th>
                        <Th >Created at</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {rowData.length !== 0 && rowData.slice(minLimitRow, rowData.length + 1).reverse().map((data) => (
                        <Tr>
                            <Td>
                                <Link
                                    color='secondary'
                                    onClick={() => {
                                        history.push(data)
                                        navigateTo('/secured/analysis/' + data.filename)
                                        console.log(history)
                                    }}>
                                    {data.filename}
                                </Link>
                            </Td>
                            <Td >{data.uploadedDate}</Td>
                            <Td>
                                <TableMenu />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable;
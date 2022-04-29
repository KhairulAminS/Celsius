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
    IconButton
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import TableMenu from './TableMenu';

function SimpleTable({ rowData, isAdded }) {

    let navigateTo = useNavigate();

    const history = [];

    const minLimitRow = rowData.length < 5 ? rowData.length : 0;
    const minLimitHistory = history.length< 5 ? history.length : 0;

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
                    {isAdded ? rowData.slice(minLimitRow - 5, rowData.length).reverse().map((data) => (
                        <Tr>
                            <Td>
                                <Link
                                    color='secondary'
                                    onClick={() => {
                                        history.push(data)
                                        navigateTo('/secured/analysis/' + data.id)
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
                    )) : history.slice(minLimitHistory - 5, history.length).map((data) => (
                        <Tr>
                            <Td>
                                <Link
                                    color='secondary'
                                    onClick={() => {
                                        history.push(data)
                                        navigateTo('/secured/profile')
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
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import axios from 'axios';

function Table() {

  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'File Name', field: 'filename'},
    { headerName: 'Date Created', field: 'uploadedDate'},
  ]);

  const [rowData, setRowData] = useState([]);

  const defaultColDef = useMemo(() => (
    {
      sortable: true,
      filter: true
    }
  ));


  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/database')
      .then(function (response) {
        console.log(response);
        setRowData(response.data);
      })
  });

  const sizeToFit = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const onSelectionChanged = useCallback(() => {
    var selectedRows = gridRef.current.api.getSelectedRows();
    var selectedRowsString = '';
    var maxToShow = 5;
    selectedRows.forEach(function (selectedRow, index) {
      if (index >= maxToShow) {
        return;
      }
      if (index > 0) {
        selectedRowsString += ', ';
      }
      selectedRowsString += selectedRow.athlete;
    });
    if (selectedRows.length > maxToShow) {
      var othersCount = selectedRows.length - maxToShow;
      selectedRowsString +=
        ' and ' + othersCount + ' other' + (othersCount !== 1 ? 's' : '');
    }
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
  }, []);

  return (
    <Box className="ag-theme-balham" sx={{ width: '100%', height: '50vh' }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData} columnDefs={columnDefs}
        animateRows={true} rowSelection='multiple'
        onCellClicked={cellClickedListener}
        onSelectionChanged={onSelectionChanged}
        defaultColDef={defaultColDef}
        onFirstDataRendered={sizeToFit}
      />
    </Box>
  );
}

export default Table;
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Table({ rowData, columnDefs }) {

  let navigateTo = useNavigate();

  const gridRef = useRef();

  const defaultColDef = useMemo(() => (
    {
      sortable: true,
      filter: true,
      suppressCellSelection: true,
      suppressNavigable: true,
    }
  ));

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
    <Box className="ag-theme-balham" sx={{ width: '100%', height: '70vh', fontSize: '15' }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData} columnDefs={columnDefs}
        animateRows={true}
        onSelectionChanged={onSelectionChanged}
        defaultColDef={defaultColDef}
        onFirstDataRendered={sizeToFit}
        rowHeight='50'
        rowSelection={'multiple'}
        groupSelectsChildren={true}
        suppressRowClickSelection={true}
        suppressAggFuncInHeader={true}
      />
    </Box>
  );
}

export default Table;
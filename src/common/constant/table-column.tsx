import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const dataColumns: GridColDef[] = [
    {
      field: 'zip',
      headerName: 'Zip Code',
      flex: 1,
      disableColumnMenu: true,
      valueGetter: data => (data.row ? data.row.stock.zip : ''),
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
      disableColumnMenu: true,
      valueGetter: data => (data.row ? data.row.stock.zip : ''),
    },
    {
      field: 'sector',
      headerName: 'Sector',
      flex: 1,
      disableColumnMenu: true,
      valueGetter: data => (data.row ? data.row.stock.sector : ''),
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
      disableColumnMenu: true,
      valueGetter: data => (data.row ? data.row.stock.phone : ''),
    },
    {
      field: 'financialCurrency',
      headerName: 'Financial Currency',
      flex: 1,
      disableColumnMenu: true,
      valueGetter: data => (data.row ? data.row.stock.financialCurrency : ''),
    },
  ];
  
  export default dataColumns;
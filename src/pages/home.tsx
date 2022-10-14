import React from 'react'
import { useState, useCallback, useEffect  } from 'react';

// Material UI Component
import { Typography, LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// Custom Component
import { data } from '../common/interfaces/data';
import { GetListData } from '../common/service/api';
import dataColumns from 'src/common/constant/table-column';
// Misc Component

export default function HomeDashboard() {
  const [data, setData] = useState<data[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);

  const getData = useCallback(
    () => {
      setIsLoadingData(true);
      GetListData({
        Success: (response: any) => {
          setData(response);
          setIsLoadingData(false);
        },
        Error: (e: any) => {
          setIsLoadingData(false);
        },
      });
    },
    []
  );
  useEffect(() => {
    getData();
  }, [getData]);
    return (
        <>
        <Typography variant="h5" gutterBottom component="div">
          Dashboard
        </Typography>
      <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          getRowId={row => row.zip}
          rows={data}
          columns={dataColumns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          sx={{ backgroundColor: 'white' }}
          loading={isLoadingData}
          pagination
          disableSelectionOnClick
          components={{
            LoadingOverlay: LinearProgress,
          }}
        />
      </div>
        </>
    )
}

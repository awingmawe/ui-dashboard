import React from 'react'
import { useState, useCallback, useEffect  } from 'react';

// Material UI Component
import { Typography, Grid, Card, CardContent, } from '@mui/material';

// Custom Component
import { data } from '../common/interfaces/data';
import { GetListData } from '../common/service/api';
// Misc Component

export default function SummaryDashboard() {
  const [data, setData] = useState<data[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const dataS = [{
    zip:'123123',
    city:'Bandung',
    sector : 'Tech',
    phone:'1231231',
    financialCurrency : 'Dollar'
  },
  {
    zip:'123123',
    city:'Bandung',
    sector : 'Tech',
    phone:'1231231',
    financialCurrency : 'Dollar'
  },
  {
    zip:'123123',
    city:'Bandung',
    sector : 'Tech',
    phone:'1231231',
    financialCurrency : 'Dollar'
  },
  {
    zip:'123123',
    city:'Bandung',
    sector : 'Tech',
    phone:'1231231',
    financialCurrency : 'Dollar'
  },
  {
    zip:'123123',
    city:'Bandung',
    sector : 'Tech',
    phone:'1231231',
    financialCurrency : 'Dollar'
  },
  {
    zip:'123123',
    city:'Bandung',
    sector : 'Tech',
    phone:'1231231',
    financialCurrency : 'Dollar'
  }]

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
          Summary
        </Typography>
      <div style={{ height: 550, width: '100%' }}>
          <Grid container spacing={2}>
            {dataS.map((a:any)=>(
                <Grid item lg={4} sm={6} xs={12}>
                    <Card sx={{ minWidth: {sm:275, xs:'auto'} }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {a.zip}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {a.city}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {a.sector}
                            </Typography>
                            <Typography variant="body2">
                                {a.phone}
                            <br />
                                {a.financialCurrency}
                            </Typography>
                        </CardContent>
                        </Card>
                </Grid>
            ))}
            </Grid>
      </div>
        </>
    )
}

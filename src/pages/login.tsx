import React, { useState } from 'react'

import { Box, Container, CssBaseline, Card, CardContent, Avatar, TextField, Grid, Link, Checkbox, FormLabel, Button } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {
  return (
    <>
      <Box className='box-left'>
      </Box>
      <Box className='box-right'>
      </Box>
      <Container component="main" maxWidth="xs" className="login-home">
          <CssBaseline />
          <Card variant="outlined">
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Logo */}
                <Avatar sx={{ m: 1, bgcolor: '#D1AA65' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Box
                  sx={{ mt: 1, display: 'grid', gap: '1rem', width: '100%' }}
                >
                      <TextField
                        label="Email"
                        name="email"
                        fullWidth
                      />
                      <TextField
                        label="Password"
                        name="password"
                        fullWidth
                      />
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs>
                      <Link href="#" variant="body2" sx={{color: '#D1AA65'}}>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item xs sx={{ textAlign: 'right' }}>
                      <Checkbox value="remember" color="primary" />
                      <FormLabel>Ingat Saya</FormLabel>
                    </Grid>
                  </Grid>
                  <a href="/" style={{textDecoration : 'none'}}>
                    <Button fullWidth variant="contained" sx={{ mt: 1, mb: 1, background:'#D1AA65', '&:hover':{
                      background : '#cf9b41'
                    } }}>
                        Log In
                    </Button>
                    </a>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
    </>
      
  )
}

import React from 'react'
import { Box, Container, IconButton, Typography, AppBar, Toolbar, Stack, Divider, Button } from '@mui/material'
import Home from '@mui/icons-material/Home';
import angular from './img/icon/angular.png';
import SwipeableButton from './SwipeableButton'

function App() {

  const displayRazorpay = () => {
    alert('displayRazorpay')
  }

  return (
    <>
      <Box sx={{ backgroundColor: 'blueviolet', minHeight: '100vh' }}>
        <AppBar elevation={0} sx={{ backgroundColor: 'blue' }}>
          <Toolbar sx={{ pt: 0.5, pb: 0.5 }}>
            <Typography sx={{ color: '#FFFFFF' }}>Payment</Typography>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack direction='row' alignItems="center" spacing={{ sx: 0.5, sm: 1.5 }}>
              <Box sx={{ boxShadow: 3, backgroundColor: 'blue', width: 50, height: 50, borderRadius: '50px', display: 'flex', justifyContent: 'center' }}>
                <IconButton>
                  <Home sx={{ color: '#FFFFFF' }} />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box sx={{ backgroundColor: 'blue', width: '100%', pb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 10, }}>
            <img src={angular} alt='' style={{ width: '20%', border: '1px solid #FFFFFF', borderRadius: '50px', backgroundColor: '#FFFFFF', }} />
          </Box>
          <Typography sx={{ textAlign: 'center', color: '#FFFFFF', fontSize: '17px', pt: 1.5 }}>Prem Biswas</Typography>
          <Typography sx={{ textAlign: 'center', color: '#FFFFFF', fontSize: '12px', pt: 0.5 }}>+919511723507</Typography>
        </Box>
        <br />
        <Container sx={{ pt: 2, bgcolor: 'blue', }}>
          <Box>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px' }}>Total Amount</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px', }}>1000.00</Typography>
              </Box>
              <Box sx={{ display: 'flex', pt: 0.5 }}>
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px' }}>Discount</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px', }}>25%</Typography>
              </Box>
              <Box sx={{ display: 'flex', pt: 0.5 }}>
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px' }}>Discount Amount</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px', }}>350.00</Typography>
              </Box>
              <Box sx={{ display: 'flex', pt: 0.5 }}>
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px' }}>Taxes & charges</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px', }}>0.00%</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{ backgroundColor: 'yellowgreen' }}>
          <Box>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>Grand Total</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '14px', }}>750.00</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{ backgroundColor: 'green' }}>
          <Box>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px' }}>You saved</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '13px', }}>250.00</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{pt: 18}}>
          <SwipeableButton onSuccess={displayRazorpay} color='#6ab04c' text='SLIDE TO PAY' />
        </Container>
      </Box>
    </>
  );
}

export default App;


/* 
<Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'blueviolet' }}>
        <Container>
          <Box sx={{pt: 1}}>
            <Box sx={{ boxShadow: 3, backgroundColor: 'blueviolet', width: 50, height: 50, borderRadius: '50px', display: 'flex', justifyContent: 'center', }}>
              <IconButton>
                <Home sx={{ color: '#ffffff' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={angular} alt='' style={{ width: '20%', paddingTop: '40px' }} />
            </Box>
            <Typography variant='h5' sx={{ color: '#FFFFFF', textAlign: 'center', pt: 4 }}>order confirmed</Typography>
            <Typography variant='h6' sx={{ color: 'gray', textAlign: 'center', pt: 1, fontSize: '16px' }}>thank you for order thank you for order</Typography>
            <Typography variant='h6' sx={{ color: 'gray', textAlign: 'center', fontSize: '16px' }}>thank you for order thank you for order</Typography>
            <Typography variant='h6' sx={{ color: 'gray', textAlign: 'center', pt: 1, fontSize: '16px' }}>thank you for order thank you for order</Typography>
            <Typography variant='h6' sx={{ color: 'gray', textAlign: 'center', fontSize: '16px' }}>thank you for order thank you for order</Typography>

            <Button fullWidth variant='contained' sx={{ mt: 20 }}>Continue Shopping</Button>
          </Box>
        </Container>
      </Box>
*/

/* 

<Box sx={{ backgroundColor: 'blueviolet', minHeight: '100vh' }}>
        <AppBar elevation={0} sx={{ backgroundColor: 'blue' }}>
          <Toolbar sx={{ pt: 0.5, pb: 0.5 }}>
            <Typography sx={{ color: '#FFFFFF' }}>My Account</Typography>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack direction='row' alignItems="center" spacing={{ sx: 0.5, sm: 1.5 }}>
              <Box sx={{ boxShadow: 3, backgroundColor: 'blue', width: 50, height: 50, borderRadius: '50px', display: 'flex', justifyContent: 'center' }}>
                <IconButton>
                  <Home sx={{ color: '#FFFFFF' }} />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box sx={{ backgroundColor: 'blue', width: '100%', pb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 10, }}>
            <img src={angular} alt='' style={{ width: '20%', border: '1px solid #FFFFFF', borderRadius: '50px', backgroundColor: '#FFFFFF', }} />
          </Box>
          <Typography sx={{ textAlign: 'center', color: '#FFFFFF', fontSize: '17px', pt: 1.5 }}>Prem Biswas</Typography>
          <Typography sx={{ textAlign: 'center', color: '#FFFFFF', fontSize: '12px', pt: 0.5 }}>+919511723507</Typography>
        </Box>
        <Container sx={{ pt: 3, }}>
          <Box sx={{ bgcolor: 'blue', boxShadow: 9, borderRadius: 1 }}>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>My Address</Typography>
              <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 2.5 }}>My Address, My Address, My Address, My Address, My Address</Typography>
              <Divider sx={{ mt: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <Box sx={{flexGrow: 1}} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 1.5, pb: 1 }}>VIEW</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{ pt: 3, }}>
          <Box sx={{ bgcolor: 'blue', boxShadow: 9, borderRadius: 1 }}>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>My Address</Typography>
              <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 2.5 }}>My Address, My Address, My Address, My Address, My Address</Typography>
              <Divider sx={{ mt: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <Box sx={{flexGrow: 1}} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 1.5, pb: 1 }}>VIEW</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{ pt: 3, }}>
          <Box sx={{ bgcolor: 'blue', boxShadow: 9, borderRadius: 1 }}>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>My Address</Typography>
              <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 2.5 }}>My Address, My Address, My Address, My Address, My Address</Typography>
              <Divider sx={{ mt: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <Box sx={{flexGrow: 1}} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 1.5, pb: 1 }}>VIEW</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{ pt: 3, }}>
          <Box sx={{ bgcolor: 'blue', boxShadow: 9, borderRadius: 1 }}>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>My Address</Typography>
              <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 2.5 }}>My Address, My Address, My Address, My Address, My Address</Typography>
              <Divider sx={{ mt: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <Box sx={{flexGrow: 1}} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 1.5, pb: 1 }}>VIEW</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{ pt: 3, }}>
          <Box sx={{ bgcolor: 'blue', boxShadow: 9, borderRadius: 1 }}>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>My Address</Typography>
              <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 2.5 }}>My Address, My Address, My Address, My Address, My Address</Typography>
              <Divider sx={{ mt: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <Box sx={{flexGrow: 1}} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 1.5, pb: 1 }}>VIEW</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container sx={{ pt: 3, pb: 3 }}>
          <Box sx={{ bgcolor: 'blue', boxShadow: 9, borderRadius: 1 }}>
            <Box sx={{ pt: 1, pl: 1, pr: 1, pb: 1 }}>
              <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>My Address</Typography>
              <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 2.5 }}>My Address, My Address, My Address, My Address, My Address</Typography>
              <Divider sx={{ mt: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <Box sx={{flexGrow: 1}} />
                <Typography sx={{ color: '#FFFFFF', fontSize: '10px', pt: 1.5, pb: 1 }}>VIEW</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

*/
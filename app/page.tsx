import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function Home() {
  const pages = [
    'Money Bisnis',
    'Fitur',
    'Perusahaan',
    'Blog',
    'Produk',
    'Tentang'
  ]
  return (
    <main className='overflow-hidden'>
      <AppBar position='fixed' color='success'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'CaptionText',
                textDecoration: 'none'
              }}>
              <Image
                src={'/money-svgrepo-com.svg'}
                alt='logo'
                width={40}
                height={40}
              />
              <p className='ml-3 text-white'>Money</p>
            </Typography>
            <Box sx={{ flexGrow: 4, display: { xs: 'flex' } }}>
              <Menu
                open={false}
                id='menu-appbar'
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}>
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block', mx: 2 }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className='w-full'>
        <header className='mt-20'>
          <div className='flex justify-center p-12'>
            <div className='flex flex-col mx-7 text-black'>
              <div className='text-[50px] font-extrabold '>
                <p>Bersama Money</p>
                <p>Uang Anda</p>
                <p>Lenyap!!</p>
              </div>
              <div className='mt-10'>
                <p>Money Menyediakan layanan berbasis</p>
                <p>menabung eletronic untuk memenuhi berbagai</p>
                <p>kebutuhan finasial kamu</p>
              </div>
              <div className='flex'>
                <Image
                  alt='playstore'
                  width={170}
                  height={150}
                  src={'/playstore.svg'}
                />
                <Image
                  alt='apple'
                  width={170}
                  height={150}
                  src={'/appstore.svg'}
                />
              </div>
            </div>
            <div className='mx-7'>
              <Image
                alt='picture'
                src={'/picture.svg'}
                width={400}
                height={400}
              />
            </div>
          </div>
        </header>
        <div className='mt-10'>
          <div className='flex justify-center'>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <Card sx={{ minWidth: 275, padding: 3, borderRadius: '30px' }}>
                <CardContent className='flex justify-center'>
                  <div className='flex flex-col'>
                    <div className='flex justify-center'>
                      <Image
                        alt='bank'
                        src={'/bankindonesia.svg'}
                        width={300}
                        height={10}
                      />
                    </div>
                    <div className='mt-2 text-sm'>
                      Money sudah terlisensi dengan bank indonesia dengan nomor
                      izin 2321/2312/23
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 275, padding: 0, borderRadius: '30px' }}>
                <CardContent className='flex justify-center'>
                  <div className='flex flex-col'>
                    <div className='flex justify-center'>
                      <Image
                        alt='qris'
                        src={'/qris.svg'}
                        width={100}
                        height={10}
                      />
                    </div>
                    <div className='text-sm'>
                      Money sudah terlisensi sebagai penyelanggara QRIS
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 275, padding: 3, borderRadius: '30px' }}>
                <CardContent className='flex justify-center'>
                  <div className='flex flex-col'>
                    <div className='flex justify-center'>
                      <Image
                        alt='iso'
                        src={'/iso.svg'}
                        width={100}
                        height={10}
                      />
                    </div>
                    <div className='mt-2 text-sm'>
                      Money sudah lulus sertifikasi ISO global
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                sx={{
                  minWidth: 275,
                  padding: 3,
                  borderRadius: '30px',
                  width: 570
                }}>
                <CardContent className='flex justify-center'>
                  <div className='flex flex-col'>
                    <div className='flex justify-center'>
                      <Image
                        alt='menteri'
                        src={'/kementrian.svg'}
                        width={100}
                        height={10}
                      />
                    </div>
                    <div className='mt-2 text-sm'>
                      Money sudah Diaudit oleh kementrian keuangan
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className='mt-28 flex flex-col '>
          <p className='text-black flex justify-center font-extrabold text-[50px]'>
            Dengan Money Transaksi Mudah!!
          </p>
          <p className='text-black flex justify-center mt-3 text-lg'>
            Fitur praktis dan handal, mudah, cepat dan hilang
          </p>
          <div className='flex justify-center w-50 mt-10'>
            <Card
              sx={{
                minWidth: 275,
                padding: 3,
                borderRadius: '30px'
              }}>
              <CardContent className='flex justify-center'>
                <div className='flex flex-col'>
                  <div className='mt-2 font-bold flex justify-center text-[23px]'>
                    Transfer Ke Berbagai Bank
                  </div>
                  <div className='flex flex-row justify-center mt-5'>
                    <Image
                      alt='iso'
                      className='mx-3'
                      src={'/mandiri.svg'}
                      width={100}
                      height={10}
                    />
                    <Image
                      alt='iso'
                      className='mx-3'
                      src={'/mandiri.svg'}
                      width={100}
                      height={10}
                    />
                    <Image
                      alt='iso'
                      className='mx-3'
                      src={'/mandiri.svg'}
                      width={100}
                      height={10}
                    />
                    <Image
                      alt='iso'
                      className='mx-3'
                      src={'/mandiri.svg'}
                      width={100}
                      height={10}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

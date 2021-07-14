import { Box, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import qrCode from '../public/qrcode.png'

export default function SlideTwo() {
  return (
    <Box
      sx={{
        bg: '#5295D5',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      color="white"
    >
      <Box>
        <Heading
          as="h1"
          color="white"
          sx={{ fontSize: [6, 7], fontWeight: 900 }}
        >
          1: Join the Slack
        </Heading>
        <Heading sx={{ fontWeight: 400 }}>
          Fill out the linked form and then check your email for instructions.
        </Heading>
        <Box
          sx={{
            bg: 'white',
            p: 3,
            mt: 4,
            borderRadius: 6,
            width: 'fit-content',
            mx: 'auto'
          }}
        >
          <Image src={qrCode} height="300" width="300" />
          <Heading
            sx={{
              color: '#5295D5',
              textTransform: 'uppercase',
              textAlign: 'center',
              mt: 2,
              fontSize: [3, 4]
            }}
          >
            hack.af/slack
          </Heading>
        </Box>
      </Box>
    </Box>
  )
}

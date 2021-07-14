import { Box, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import messageSS from '../public/message.png'

export default function SlideFive() {
  return (
    <Box
      sx={{
        bg: 'green',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      color="white"
    >
      <Box>
        <Box
          sx={{
            mb: 4,
            width: 'fit-content',
            mx: 'auto'
          }}
        >
          <Image src={messageSS} alt="Messagee" quality="100" />
        </Box>
        <Heading
          as="h1"
          color="white"
          sx={{ fontSize: [6, 7], fontWeight: 900 }}
        >
          5: Introduce Your Project
        </Heading>
      </Box>
      <style>
        {`
        img{
          border-radius: 8px;
        }
        
        `}
      </style>
    </Box>
  )
}

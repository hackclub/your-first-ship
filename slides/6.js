import { Box, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import messageSS from '../public/message.png'

export default function SlideFive() {
  return (
    <Box
      sx={{
        bg: '#F0984A',
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
        <Heading
          as="h1"
          color="white"
          sx={{ fontSize: [7, 8], fontWeight: 900 }}
        >
          🚢 <br /> Ship it!
        </Heading>
        <Heading as="h1" sx={{fontWeight: '400', mt: 1}}>Just click send in Slack :D</Heading>
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

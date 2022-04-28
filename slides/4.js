import { Box, Grid, Heading } from 'theme-ui'
import Image from 'next/image'

export default function SlideFour() {
  return (
    <Box
      sx={{
        bg: 'red',
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
          sx={{ fontSize: [5, 6], fontWeight: 900, pt: 4 }}
        >
          3: Enter the Ship Channel
        </Heading>
        <Image
          src="/message.svg"
          width="1000px"
          height="580px"
        />
      </Box>
      
    </Box>
  )
}

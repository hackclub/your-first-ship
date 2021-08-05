import { Box, Container, Heading } from 'theme-ui'
import Image from 'next/image'
import profilePic from '../public/ship_bg.png'

export default function SlideOne() {
  return (
    <Container>
      <Container
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          zIndex: '999',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Box mt={4}>
          <Heading
            as="h1"
            color="white"
            sx={{ fontSize: [6, 7], fontWeight: 900 }}
          >
            Your First Ship
          </Heading>
          <Heading as="h1" color="white" >
            on the Hack Club Slack
          </Heading>
        </Box>
      </Container>
      <Image src={profilePic} layout="fill" quality="100" />
      <style>
        {`
        img{
          object-fit: cover;
          object-position: bottom;
        }
        
        `}
      </style>
    </Container>
  )
}

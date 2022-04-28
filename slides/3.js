import { Box, Grid, Heading } from 'theme-ui'

export default function SlideThree() {
  return (
    <Box
      sx={{
        bg: 'purple',
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
            bg: 'white',
            p: 3,
            mb: 4,
            borderRadius: 6,
            width: 'fit-content',
            mx: 'auto'
          }}
        >
          <img
            src="/toriel.png"
            height="300"
            width="300"
          />
        </Box>
        <Heading
          as="h1"
          color="white"
          sx={{ fontSize: [6, 7], fontWeight: 900 }}
        >
          2: Meet Toriel
        </Heading>
        <Heading sx={{ fontWeight: 400 }}>
          Toriel will show you around the Slack and all of it's channels!
        </Heading>
      </Box>
    </Box>
  )
}

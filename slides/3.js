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
            mb: 4,
            width: 'fit-content',
            mx: 'auto'
          }}
        >
          <img
            src="https://i.gifer.com/origin/c6/c6afab251a20e6d0eb80b983450bc66e_w200.gif"
            height="300"
            width="300"
          />
        </Box>
        <Heading
          as="h1"
          color="white"
          sx={{ fontSize: [6, 7], fontWeight: 900 }}
        >
          2: Meet Clippy
        </Heading>
        <Heading sx={{ fontWeight: 400 }}>
          Clippy will show you around the Slack and all of it's channels!
        </Heading>
      </Box>
    </Box>
  )
}

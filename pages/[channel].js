import { Box, Container, Heading } from 'theme-ui'
import Image from 'next/image'
import profilePic from '../public/ship_bg.png'
import React, { useState } from 'react'
import One from '../slides/1'
import Two from '../slides/2'
import Three from '../slides/3'
import Four from '../slides/4'
import Five from '../slides/5'
import Six from '../slides/6'

export default function Home() {
  const [slide, setSlide] = useState(1)
  const handleKeyPress = event => {
    if (event.key === 'ArrowLeft') {
      setSlide(slide > 1 ? slide - 1 : slide)
    } else if (event.key === 'ArrowRight') {
      setSlide(slide < 6 ? slide + 1 : slide)
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [slide])

  switch (slide) {
    case 1:
      return <One />
      break
    case 2:
      return <Two />
      break
    case 3:
      return <Three />
      break
    case 4:
      return <Four />
      break
    case 5:
      return <Five />
      break
    case 6:
      return <Six />
      break
    default:
      return <>No Slide</>
  }
}

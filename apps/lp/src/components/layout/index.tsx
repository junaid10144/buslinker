import React from 'react'
import tw from 'tailwind-styled-components'
import {useReservationCountdown} from "utils"
import { Footer } from './footer'
import { Navbar } from './navbar'

const Container = tw.div`bg-white dark:bg-gray-900 transition`
const ContentContainer = tw.div`pt-14`

export const Layout = ({ children }) => {

  useReservationCountdown()

  return (
    <Container>
      <Navbar />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  )
}

export * from './seo'

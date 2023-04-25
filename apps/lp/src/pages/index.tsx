import React from 'react'
import { Layout, Seo } from '../components'
import tw from 'tailwind-styled-components'

const Title = tw.span`text-5xl text-green-500 uppercase font-bold`
const Caption = tw.span`text-3xl text-gray-900 uppercase font-bold`
const Description = tw.h1`text-2xl text-gray-500`
const MainImage = tw.img`rounded-3xl shadow-lg`
const Section = tw.div`max-w-screen-2xl mx-auto relative`
const Seperator = tw.div`w-10 h-1 bg-blue-500`
const Button = tw.button`bg-green-500 px-5 py-3 rounded-xl text-white font-bold uppercase`
const Gradient = tw.div`absolute inset-0 bg-gradient-radial-hero`
const BookingFormDummyDiv = tw.div`bg-white w-2/3 h-24 rounded-3xl shadow-xl`

const heroFeatures = [
  {
    title: 'Book Easy',
    description: 'Tickets with QR code',
  },
  {
    title: 'Discount',
    description: 'For those who create an account',
  },
  {
    title: '30+',
    description: 'Cities around the U.S.',
  },
]
const HeroFeatureItem = ({ item }) => {
  return (
    <div>
      <h5 className="font-bold">{item.title}</h5>
      <p>{item.description}</p>
    </div>
  )
}

const HeroFeatures = () => {
  return (
    <div className="flex gap-4">
      {heroFeatures.map((item) => (
        <HeroFeatureItem item={item} />
      ))}
    </div>
  )
}

const LogoTitle = () => (
  <div>
    <div>
      <Caption>The private</Caption>
      <div className="mt-1">
        <Title className="text-blue-500">Bus</Title>
        <Title className="ml-3 text-green-500">Company</Title>
      </div>
    </div>
    <Seperator className="mt-4" />
  </div>
)

const TextSection = () => {
  return (
    <div>
      <div className="space-y-6">
        <LogoTitle />
        <Description>
          This is a private bus company that takes you from point A to point B
          within Punjab
        </Description>
        <Button> Create Account</Button>
      </div>

      <div className="mt-32">
        <HeroFeatures />
      </div>
    </div>
  )
}

const GradientBackground = () => {
  return (
    <div className="absolute left-0 right-0 top-0 h-[900px]">
      <Gradient />
    </div>
  )
}

const BookingForm = () => (
  <div className="mt-16 flex justify-center">
    <BookingFormDummyDiv />
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <GradientBackground />
      <Section>
        <BookingForm />
        <div className="mt-16 flex justify-between items-center gap-x-8">
          <TextSection />
          <div>
            <MainImage
              src="https://source.unsplash.com/T5jzpRTVF1U"
              alt="Bus"
            />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage

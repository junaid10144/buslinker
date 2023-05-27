import { SectionAndOffset, Text } from 'components'
import moment from 'moment'
import React from 'react'

const GuestsIndicator = () => {
  const adults = 2
  const children = 2
  const infants = 0

  const text = [
    adults + ' Adults',
    children + ' Children',
    infants + ' Infacts',
  ]
    .filter((i) => +i[0])
    .join(' | ')

  return (
    <div className="mt-4">
      <Text>{text}</Text>
    </div>
  )
}

const Header = () => {
  const location = 'New York - Los Angeles'
  const date = new Date()
  const formattedDate = moment(date).format('LL')

  return (
    <div className="text-center">
      <Text variant="h5">Search</Text>
      <div className="mt-4">
        <Text variant="button">{location}</Text>
        <Text>{formattedDate}</Text>
        <GuestsIndicator />
      </div>
    </div>
  )
}
const Trips = () => <div></div>

export const SearchSection = () => {
  return (
    <SectionAndOffset>
      <div>
        <div></div>
        <div className="flex flex-col">
          <Header />
          <Trips />
        </div>
        <div></div>
      </div>
    </SectionAndOffset>
  )
}

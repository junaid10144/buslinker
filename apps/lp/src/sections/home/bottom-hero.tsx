import React from 'react'
import { Button, SectionAndOffset, Text } from 'components'
import { LogoTitle } from './hero'
import { InView } from 'react-intersection-observer'
export const BottomHeroSection = () => (
  <InView>
    {({ ref, inView }) => (
      <SectionAndOffset ref={ref}>
        <div className="flex flex-col items-center">
          <LogoTitle inView={inView} />
        </div>
        <div
          className={`flex flex-col items-center w-1/3 text-center mx-auto mt-8 transition delay-[1400ms] duration-700 ${
            inView ? '' : 'opacity-0'
          }`}
        >
          <Text color="gray-light">
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet soluta error distinctio quibusdam rerum ab unde nihil, corporis aspernatur veniam fugiat, corrupti voluptate totam illo, provident ipsa? Nulla, dolorem.'
            }
          </Text>
          <div className="mt-8">
            <Button>Book Now</Button>
          </div>
        </div>
      </SectionAndOffset>
    )}
  </InView>
)

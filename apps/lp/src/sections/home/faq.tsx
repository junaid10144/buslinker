import { Card, CardContent, SectionAndOffset, Text } from 'components'
import React, { useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import { FaChevronCircleDown } from '@react-icons/all-files/fa/FaChevronCircleDown'
const CardContainer = tw.div`space-y-4 mt-14`

type FaqItemType = {
  title: string
  description: string
}

const faqItems: FaqItemType[] = [
  {
    title: 'How do I book tickets?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur in neque quis dolores ab. Fugit dolore illo, ab pariatur blanditiis aspernatur sit perspiciatis quo impedit obcaecati, ratione animi error accusamus.',
  },
  {
    title: 'How long does my trip take?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur in neque quis dolores ab. Fugit dolore illo, ab pariatur blanditiis aspernatur sit perspiciatis quo impedit obcaecati, ratione animi error accusamus.',
  },
  {
    title: 'Do you provide services in Lahore',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur in neque quis dolores ab. Fugit dolore illo, ab pariatur blanditiis aspernatur sit perspiciatis quo impedit obcaecati, ratione animi error accusamus.',
  },
  {
    title: 'Do your busses have air conditioning?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur in neque quis dolores ab. Fugit dolore illo, ab pariatur blanditiis aspernatur sit perspiciatis quo impedit obcaecati, ratione animi error accusamus.',
  },
]

const FaqItem = ({ item }: { item: ReviewType }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    // open / close the content.
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <CardContent>
        <div className="flex items-center justify-between">
          <Text variant="bodyBig" className="font-bold">
            {item.title}
          </Text>
          <FaChevronCircleDown
            className={`w-4 h-4 transition ${isOpen ? '-rotate-180' : ''} `}
          />
        </div>
        <div
          className="transition-all will-change-[max-height]"
          style={{
            maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
          }}
          ref={contentRef}
        >
          <div
            className={`transition duration-500 ${
              isOpen ? 'delay-150' : 'opacity-0'
            }`}
          >
            <Text className="pt-6">{item.description}</Text>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const FaqSection = () => {
  return (
    <SectionAndOffset>
      <Text variant="h4" className="text-center uppercase">
        Frequently Asked Questions
      </Text>
      <CardContainer>
        {faqItems.map((item) => (
          <FaqItem key={item.title} item={item} />
        ))}
      </CardContainer>
    </SectionAndOffset>
  )
}

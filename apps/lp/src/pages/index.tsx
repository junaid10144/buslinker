import React from 'react'
import { Layout, Seo } from 'components'
import {
  BottomHeroSection,
  FaqSection,
  HeroSection,
  MidSection,
  ReviewsSection,
  StatsSection,
} from 'sections'
import { GiSlashedShield } from '@react-icons/all-files/gi/GiSlashedShield'
import { GiAlarmClock } from '@react-icons/all-files/gi/GiAlarmClock'
import { GiMoneyStack } from '@react-icons/all-files/gi/GiMoneyStack'
import { BiNetworkChart } from '@react-icons/all-files/bi/BiNetworkChart'
import { FaLeaf } from '@react-icons/all-files/fa/FaLeaf'

const sections = {
  features: {
    title: 'A Better Way To Travel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at hic libero, maxime consequuntur dolor suscipit vitae aperiam. Magnam ipsum numquam perferendis, aut debitis omnis nihil! Veritatis quisquam nam atque!',
    featuresTitle: 'Features',
    imageUrl: 'https://source.unsplash.com/eGA5dZG4sCw',
    imageAlt: 'Bus',
    direction: 'left',
    features: [
      {
        title: 'Safety',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda suscipit, quaerat voluptates doloremque sunt voluptate, tenetur nostrum rem qui facere beatae non quod at eveniet? Ducimus, molestiae at.',
        icon: GiSlashedShield,
      },
      {
        title: 'Reliability',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex assumenda dignissimos illum corporis, ab autem fugit veritatis. Dolorum officiis et labore hic natus! Debitis qui quo earum reiciendis voluptatum.',
        icon: GiAlarmClock,
      },
      {
        title: 'Affordable',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur nulla quidem ad, ipsa assumenda necessitatibus! Maxime sapiente saepe animi aspernatur tempore quibusdam dolorem? Ratione beatae ab deleniti similique ducimus!',
        icon: GiMoneyStack,
      },
      {
        title: 'Environmentally Friendly',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, est consequatur esse culpa, a facilis repellendus, error dolores nostrum possimus deserunt alias dolor autem tenetur iste illum animi debitis laborum!',
        icon: BiNetworkChart,
      },
      {
        title: 'Largest Network in the U.S.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo magnam consequatur dolore maiores quasi repudiandae animi modi fuga autem vel maxime eius, corrupti inventore praesentium eligendi esse reiciendis natus',
        icon: FaLeaf,
      },
    ],
  },
  features2: {
    title: 'A Better Way To Travel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at hic libero, maxime consequuntur dolor suscipit vitae aperiam. Magnam ipsum numquam perferendis, aut debitis omnis nihil! Veritatis quisquam nam atque!',
    featuresTitle: 'Features',
    imageUrl: 'https://source.unsplash.com/eGA5dZG4sCw',
    imageAlt: 'Bus',
    features: [
      {
        title: 'Safety',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda suscipit, quaerat voluptates doloremque sunt voluptate, tenetur nostrum rem qui facere beatae non quod at eveniet? Ducimus, molestiae at.',
        icon: GiSlashedShield,
      },
      {
        title: 'Reliability',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex assumenda dignissimos illum corporis, ab autem fugit veritatis. Dolorum officiis et labore hic natus! Debitis qui quo earum reiciendis voluptatum.',
        icon: GiAlarmClock,
      },
      {
        title: 'Affordable',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur nulla quidem ad, ipsa assumenda necessitatibus! Maxime sapiente saepe animi aspernatur tempore quibusdam dolorem? Ratione beatae ab deleniti similique ducimus!',
        icon: GiMoneyStack,
      },
      {
        title: 'Environmentally Friendly',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, est consequatur esse culpa, a facilis repellendus, error dolores nostrum possimus deserunt alias dolor autem tenetur iste illum animi debitis laborum!',
        icon: BiNetworkChart,
      },
      {
        title: 'Largest Network in the U.S.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo magnam consequatur dolore maiores quasi repudiandae animi modi fuga autem vel maxime eius, corrupti inventore praesentium eligendi esse reiciendis natus',
        icon: FaLeaf,
      },
    ],
  },
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <MidSection section={sections.features} />
    <MidSection section={sections.features2} />
    <StatsSection />
    <ReviewsSection />
    <FaqSection />
    <BottomHeroSection />
  </Layout>
)

export default IndexPage

import { SectionAndOffset, Card, CardHeading, CardContent, Text } from "@buslinker/ui"
import { CheckerSection } from "@/sections"

export const Checker = () => {
  return (
    <SectionAndOffset>
      <Card>
        <CardHeading>
          <Text variant="h5">{"Reservation Checker"}</Text>
        </CardHeading>
        <CardContent>
          <CheckerSection />
        </CardContent>
      </Card>
    </SectionAndOffset>
  )
}

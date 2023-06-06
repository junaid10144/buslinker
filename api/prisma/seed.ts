import * as seedData from "./seed-data"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.city.createMany({
    data: seedData.cities,
  })

  const cities = await prisma.city.findMany()

  await prisma.bus.createMany({
    data: seedData.bus,
  })

  const buses = await prisma.bus.findMany()

  const trips = await prisma.trip.createMany({
    data: seedData.getFakeTrips({ cities, buses }),
  })

  console.log({ cities, trips })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

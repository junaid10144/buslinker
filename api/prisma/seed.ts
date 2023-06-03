import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
  const city = await prisma.city.createMany({
    data: [
      {
        name: "New York",
        slug: "new-york",
      },
      {
        name: "Los Angeles",
        slug: "los-angeles",
      },
      {
        name: "Chicago",
        slug: "chicago",
      },
    ],
  })

  console.log({ city })
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

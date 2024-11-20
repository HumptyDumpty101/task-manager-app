import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const columns = ["To Do", "In Progress", "Done"];

  for (const name of columns) {
    await prisma.column.upsert({
      where: { name },
      update: {}, // Do nothing if it exists
      create: { name },
    });
  }

  console.log("Default columns seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

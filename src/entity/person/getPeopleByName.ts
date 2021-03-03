import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getPeopleByName = async (nome: string) => {
  // await validator.name(data);

  const people = await prisma.people.findMany({
    where: { nome }, 
    include: {genders: true}
  });

  if(!people) return 'NotFound';

  return people
}

export default getPeopleByName;
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getPeopleByName = async (nome: string) => {
  const people = await prisma.people.findMany({
    where: { nome, deleted: false }, 
    include: {genders: true}
  });

  if(!people) return 'NotFound';

  return people
}

export default getPeopleByName;
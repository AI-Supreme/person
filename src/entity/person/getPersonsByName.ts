import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getPersonsByName = async (nome: string) => {
  // await validator.name(data);

  const persons = await prisma.persons.findMany({where: { nome }});

  if(!persons) return 'NotFound';

  return persons
}

export default getPersonsByName;
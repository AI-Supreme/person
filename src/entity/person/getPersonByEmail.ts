import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getPersonByEmail = async (email: string) => {
  const person = await prisma.people.findUnique({
    where: { email },
    include: { genders: true }
  });

  if(!person) return 'NotFound';
  if(person.deleted) return 'NotFound';

  return person;
}

export default getPersonByEmail;
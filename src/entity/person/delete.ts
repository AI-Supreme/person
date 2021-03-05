import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

interface Data {
  email: string
  userId: string
}

const deletePerson = async (data: Data) => {
  const { email, userId } = data;

  const person = await prisma.people.findUnique({where: { email }});

  if(!person) return 'NotFound';
  if(person.deleted) return 'NotFound';

  if(person.user_id !== userId) return 'NotAllowed'

  await prisma.people.update({where: { email }, data: {deleted: true}})
  return "Deleted";
}

export default deletePerson;
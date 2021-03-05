import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const findGender = async (gender: string) => {
  if(gender) {
    const genderReturn = await prisma.genders.findUnique({where: { gender }});
    return genderReturn
  }
}

export default findGender;
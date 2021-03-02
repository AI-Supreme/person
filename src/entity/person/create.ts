import { PrismaClient } from '@prisma/client';

export interface PersonData {
  nome: string
  email: string
  tel: string
  tel2: string
  mae: string
  pai: string
  sexo: string
  escolaridade: string
  profissao: string
  dataDeNascimento: string
  obito: boolean
  codigo_postal: number
  provincia: string
  cidade: string
  bairro: string
  quarteirao: string
  casa: number
}

const prisma = new PrismaClient();

const createPerson = async (data: PersonData) => {
  // await validator.person(data);

  const person = await prisma.persons.findUnique({where: { email: data.email }});

  if(person)
  return 'AlreadyExist';

  const user_id = await prisma.users.create({
    data: {
      name: "Arlindo",
      company: "AI Supreme",
      email: "aisupreme.suporte@gmail.com",
      tel: "852192413",
      password: "mnbvcxz",
      updated_at: new Date
    },
    select: {
      id: true
    }
  })

  const newPerson = await prisma.persons.create({
    data: {
      nome: data.nome,
      email: data.email,
      tel: data.tel,
      tel2: data.tel2,
      mae: data.mae,
      pai: data.pai,
      sexo: data.sexo,
      escolaridade: data.escolaridade,
      profissao: data.profissao,
      nascido: data.dataDeNascimento,
      obito: data.obito,
      codigo_postal: data.codigo_postal,
      provincia: data.provincia,
      cidade: data.cidade,
      bairro: data.bairro,
      quarteirao: data.quarteirao,
      casa: data.casa,
      user_id: user_id.id,
      updated_at: new Date,
    }
  })
  
  return newPerson
}

export default createPerson;
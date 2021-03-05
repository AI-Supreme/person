import { PrismaClient } from '@prisma/client';
import { PersonData } from './create';
import findGender from './findGender/findGender';

const prisma = new PrismaClient();

const updatePerson = async (data: PersonData, userId: string) => {
  const person = await prisma.people.findUnique({where: { email: data.email }});

  if(!person) return 'NotFound';
  if(person.user_id !== userId) return 'NotAllowed'

  const updatedPerson = await findGender(data.sexo).then(gender => {
    return prisma.people.update({
      where: { email: data.email }, 
      data: {
        nome: data.nome,
        email: data.email,
        tel: data.tel,
        tel2: data.tel2,
        mae: data.mae,
        pai: data.pai,
        gender_id: gender ? gender.id : undefined,
        escolaridade: data.escolaridade,
        profissao: data.profissao,
        nascido: data.dataDeNascimento,
        obito: data.obito,
        codigo_postal: Number(data.codigo_postal),
        provincia: data.provincia,
        cidade: data.cidade,
        bairro: data.bairro,
        quarteirao: Number(data.quarteirao),
        casa: Number(data.casa),
        updated_at: new Date,
      },
      include: { genders: true }
    })
  })
  
  return updatedPerson
}

export default updatePerson;
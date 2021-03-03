import { genders, people  } from '@prisma/client';

interface Person {
  id: string
  nome: string
  email: string
  tel: string
  tel2: string | null
  mae: string | null
  pai: string | null
  gender_id: number
  genders: genders
  escolaridade: string | null
  profissao: string | null
  nascido: string | null
  obito: boolean
  codigo_postal: number | null
  provincia: string | null
  cidade: string | null
  bairro: string | null
  quarteirao: number | null
  casa: number | null
  user_id: string
  created_at: Date
  updated_at: Date
  deleted: boolean
}

export default {
  render(person: Person) {
    return {
      nome: person.nome,
      email: person.email,
      tel: person.tel,
      tel2: person.tel2,
      mae: person.mae,
      pai: person.pai,
      sexo: person.genders.gender === 'Not defined' && 'Não definido',
      escolaridade: person.escolaridade,
      profissao: person.profissao,
      dataDeNascimento: person.nascido,
      codigoPostal: person.codigo_postal,
      provincia: person.provincia,
      cidade: person.cidade,
      bairro: person.bairro,
      quarteirao: person.quarteirao,
      casa: person.casa,
      obito: person.obito
    };
  },

  renderMany(people: Person[]) {
    return people.map(person => this.render(person));
  }
}
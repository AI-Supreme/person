import { people  } from '@prisma/client';

export default {
  render(person: people) {
    return {
      nome: person.nome,
      email: person.email,
      tel: person.tel,
      tel2: person.tel2,
      mae: person.mae,
      pai: person.pai,
      sexo: person.sexo,
      escolaridade: person.escolaridade,
      profissao: person.profissao,
      nascido: person.nascido,
      codigoPostal: person.codigo_postal,
      provincia: person.provincia,
      cidade: person.cidade,
      bairro: person.bairro,
      quarteirao: person.quarteirao,
      casa: person.casa,
      obito: person.obito
    };
  },

  renderMany(people: people[]) {
    return people.map(person => this.render(person));
  }
}
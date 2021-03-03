import * as yup from 'yup';
import { PersonData } from '../entity/person/create';
import { parse, isDate } from "date-fns";

function parseDateString(value: string, originalValue: string) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd/MM/yyyy', new Date());

  return parsedDate;
}

export default {
  async person(person: PersonData) {
    const schema = yup.object().shape({
      nome: yup.string()
        .required('Nome obrigatório')
        .min(3, 'Nome deve ter mínimo 3 máximo 45 caracteres')
        .max(45, 'Nome deve ter mínimo 3 máximo 45 caracteres'),
      email: yup.string()
        .required('Email obrigatório!')
        .email('Email invalido, verifica o seu email e volte a tentar.'),
      tel: yup.string()
        .required('Contacto obrigatório')
        .min(6, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres')
        .max(15, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres'),
      tel2: yup.string()
        .min(6, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres')
        .max(15, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres'),
      mae: yup.string()
        .min(3, 'Nome deve ter mínimo 3 máximo 45 caracteres')
        .max(45, 'Nome deve ter mínimo 3 máximo 45 caracteres'),
      pai: yup.string()
        .min(3, 'Nome deve ter mínimo 3 máximo 45 caracteres')
        .max(45, 'Nome deve ter mínimo 3 máximo 45 caracteres'),
      sexo: yup.string()
        .matches(/(M|F|Not defined)/, {
          message: 'Use o M ou F para referir o género',
          excludeEmptyString: false
        }),
      escolaridade: yup.string()
        .min(3, 'Nome deve ter mínimo 3 máximo 66 caracteres')
        .max(66, 'Nome deve ter mínimo 3 máximo 66 caracteres'),
      profissao: yup.string()
        .min(3, 'Nome deve ter mínimo 3 máximo 99 caracteres')
        .max(99, 'Nome deve ter mínimo 3 máximo 99 caracteres'),
      dataDeNascimento: yup.date().transform(parseDateString)
        .max(new Date, 'Data de nascimento invalida'),
      obito: yup.boolean(),
      codigo_postal: yup.number(),
      provincia: yup.string()
        .min(3, 'Nome deve ter mínimo 3 máximo 20 caracteres')
        .max(20, 'Nome deve ter mínimo 3 máximo 20 caracteres'),
      cidade: yup.string()
        .min(3, 'Nome deve ter mínimo 3 máximo 23 caracteres')
        .max(23, 'Nome deve ter mínimo 3 máximo 23 caracteres'),
      bairro: yup.string()
        .min(3, 'Nome deve ter mínimo 3 máximo 23 caracteres')
        .max(23, 'Nome deve ter mínimo 3 máximo 23 caracteres'),
      quarteirao: yup.number()
        .max(3000000, 'Numero do quarteirão invalido'),
      casa: yup.number()
        .max(3000000, 'Numero da casa invalida')
    })

    await schema.validate({
      nome: person.nome,
      email: person.email,
      tel: person.tel,
      tel2: person.tel2,
      mae: person.mae,
      pai: person.pai,
      sexo: person.sexo,
      escolaridade: person.escolaridade,
      profissao: person.profissao,
      dataDeNascimento: person.dataDeNascimento,
      obito: person.obito,
      codigo_postal: person.codigo_postal,
      provincia: person.provincia,
      cidade: person.cidade,
      bairro: person.bairro,
      quarteirao: person.quarteirao,
      casa: person.casa
    })
  },

  async name(nome: string) {
    const schema = yup.object().shape({
      nome: yup.string()
        .required('Nome obrigatório')
        .min(3, 'Nome deve ter mínimo 3 máximo 45 caracteres')
        .max(45, 'Nome deve ter mínimo 3 máximo 45 caracteres'),
    })

    await schema.validate({ nome })
  }
}
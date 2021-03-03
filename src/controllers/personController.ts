import { Request, Response } from "express";
import createPerson, { PersonData } from "../entity/person/create";
import getPersonsByName from '../entity/person/getPersonsByName';
import personView from '../views/person';


export default {
  async index(request: Request, response: Response) {
    const { nome } = request.body;
    
    const persons = await getPersonsByName(nome);

    if(persons === 'NotFound')
    return response.status(404).json({error: 'Não foi encontrado nenhuma pessoa com o nome dado.'})

    response.status(200).json(personView.renderMany(persons));
  },

  async create(request: Request, response: Response) {
    const {
      nome,
      email,
      tel,
      tel2,
      mae,
      pai,
      sexo,
      escolaridade,
      profissao,
      dataDeNascimento,
      obito,
      codigo_postal,
      provincia,
      cidade,
      bairro,
      quarteirao,
      casa
    } =  request.body;

    const data: PersonData = {
      nome,
      email,
      tel,
      tel2,
      mae,
      pai,
      sexo,
      escolaridade,
      profissao,
      dataDeNascimento,
      obito,
      codigo_postal,
      provincia,
      cidade,
      bairro,
      quarteirao,
      casa
    }

    const person = await createPerson(data);

    if(person === 'AlreadyExist')
    return response.status(400).json({error: 'Já existe uma pessoa com o email dado, use a endpoint do update ou troque o email.'})

    response.status(201).json(personView.render(person));
  }
}
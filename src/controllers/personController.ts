import { Request, Response } from "express";
import createPerson, { PersonData } from "../entity/person/create";
import getPeopleByName from '../entity/person/getPeopleByName';
import personView from '../views/person';
import validator from '../errors/validator';


export default {
  async index(request: Request, response: Response) {
    const { nome } = request.body;

    await validator.name(nome);
    const people = await getPeopleByName(nome);

    if(people === 'NotFound' || typeof people[0] === 'undefined')
    return response.status(404).json({error: 'Não foi encontrado nenhuma pessoa com o nome dado.'})

    response.status(200).json(personView.renderMany(people));
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
      sexo: sexo ? sexo : 'Not defined',
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

    await validator.person(data);

    const person = await createPerson(data);

    if(person === 'AlreadyExist')
    return response.status(400).json({error: 'Já existe uma pessoa com o email dado, use a endpoint do update ou troque o email.'})

    if(person === 'GenderNotFound')
    return response.status(404).json({error: 'Use o M ou F para referir o género'})
    
    response.status(201).json(personView.render(person));
  }
}
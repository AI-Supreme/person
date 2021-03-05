import { Request, Response } from "express";
import createPerson, { PersonData } from "../entity/person/create";
import updatePerson from '../entity/person/update';
import getPeopleByName from '../entity/person/getPeopleByName';
import getPersonByEmail from "../entity/person/getPersonByEmail";
import deletePerson from "../entity/person/delete";
import personView from '../views/person';
import validator from '../errors/validator';


export default {
  async index(request: Request, response: Response) {
    const { nome } = request.body;

    await validator.name(nome);
    const people = await getPeopleByName(nome);

    if(people === 'NotFound' || typeof people[0] === 'undefined')
    return response.status(404).json({error: 'Nenhum registo encontrado com o nome dado.'})

    response.status(200).json(personView.renderMany(people));
  },

  async getByEmail(request: Request, response: Response) {
    const { email } = request.body;

    await validator.email(email);
    const person = await getPersonByEmail(email);

    if(person === 'NotFound')
    return response.status(404).json({error: 'Registo não encontrado!'})

    response.status(200).json(personView.render(person));
  },

  async update(request: Request, response: Response) {
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
      casa,
      userId
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

    await validator.person(data);

    const person = await updatePerson(data, userId);

    if(person === 'NotFound')
    return response.status(404).json({error: 'Registo não encontrado!'})

    if(person === 'NotAllowed')
    return response.status(404).json({error: 'Você não tem a permissão para fazer update. Por favor, autenticar-se'});
    response.status(201).json(personView.render(person));
  },

  async delete(request: Request, response: Response) {
    const { email, userId } = request.body;

    await validator.email(email);
    const person = await deletePerson({ email, userId });

    if(person === 'NotFound')
    return response.status(404).json({error: 'Registo não encontrado!'})

    if(person === 'NotAllowed')
    return response.status(404).json({error: 'Você não tem a permissão para delete. Por favor, autenticar-se'});

    if(person === 'Deleted')
    return response.status(200).json({message: 'Registo eliminado com sucesso!'});
    response.status(400).json({error: 'Não foi possível eliminar Registo!'});
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
    return response.status(400).json({error: 'Já existe um registo com o email dado, use a endpoint do update ou troque o email.'})

    if(person === 'GenderNotFound')
    return response.status(404).json({error: 'Use o M ou F para referir o género'})
    
    response.status(201).json(personView.render(person));
  }
}
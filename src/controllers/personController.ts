import { Request, Response } from "express";
import createPerson, { PersonData } from "../entity/person/create";


export default {
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
    return response.status(400).json({error: 'person data already exist, use update endpoint to update'})

    response.status(201).json(person);
  }
}
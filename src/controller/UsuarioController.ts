import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';
import { validate } from 'class-validator';

export class UsuarioController {

  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(Usuario);
    let usuario;

    try {
      usuario = await userRepository.find({ select: ['usua_login', 'usua_password', 'usua_rut', 'usua_alias', 'usua_nombre'] });
    } catch (e) {
      res.status(404).json({ message: 'Somenthing goes wrong!' });
    }

    if (usuario.length > 0) {
      res.send(usuario);
    } else {
      res.status(404).json({ message: 'Not result' });
    }
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    let usua_id = +id;
    const userRepository = getRepository(Usuario);
    try {
      const user = await userRepository.findOne({ select: ['usua_login', 'usua_password', 'usua_rut', 'usua_alias', 'usua_nombre'], where: { usua_id: usua_id } });
      res.send(user);
    } catch (e) {
      res.status(404).json({ message: 'Not result' });
    }
  };
}

export default UsuarioController;

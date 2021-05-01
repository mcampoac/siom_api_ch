import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';
import { validate } from 'class-validator';

export class UsuarioController {

    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(Usuario);
      let usuario;

      try {
        usuario = await userRepository.find({ select: ['usua_login', 'usua_password', 'usua_rut', 'usua_alis', 'usua_nombre'] });
      } catch (e) {
        res.status(404).json({ message: 'Somenthing goes wrong!' });
      }

      if (usuario.length > 0) {
        res.send(usuario);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
}

export default UsuarioController;

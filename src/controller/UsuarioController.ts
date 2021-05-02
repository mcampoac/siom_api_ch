import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';
import { validate } from 'class-validator';

export class UsuarioController {

  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(Usuario);
    let usuario;

    try {
      usuario = await userRepository.find({ select: ['usua_id', 'usua_login', 'usua_password', 'usua_rut', 'usua_alias', 'usua_nombre'] });
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
      const user = await userRepository.findOne({ select: ['usua_id', 'usua_login', 'usua_password', 'usua_rut', 'usua_alias', 'usua_nombre'], where: { usua_id: usua_id } });
      res.send(user);
    } catch (e) {
      res.status(404).json({ message: 'Not result' });
    }
  };

  static new = async (req: Request, res: Response) => {
    const { empr_id, usua_login, usua_password, usua_rut, usua_alias, usua_nombre, usua_cargo, usua_correo_electronico, usua_telefono_fijo, usua_telefono_movil, usua_direccion, usua_fecha_creacion, usua_creador, usua_acceso_web, usua_acceso_movil, usua_acceso_api, usua_estado, usua_opciones, usua_crypt_pass, usua_selfie_tecnico, api_token, api_token_expires_in } = req.body;
    const usuario = new Usuario();

    usuario.empr_id = empr_id;
    usuario.usua_login = usua_login;
    usuario.usua_password = usua_password;
    usuario.usua_rut = usua_rut;
    usuario.usua_alias = usua_alias;
    usuario.usua_nombre = usua_nombre;
    usuario.usua_cargo = usua_cargo;
    usuario.usua_correo_electronico = usua_correo_electronico;
    usuario.usua_telefono_fijo = usua_telefono_fijo;
    usuario.usua_telefono_movil = usua_telefono_movil;
    usuario.usua_direccion = usua_direccion;
    usuario.usua_fecha_creacion = usua_fecha_creacion;
    usuario.usua_creador = usua_creador;
    usuario.usua_acceso_web = usua_acceso_web;
    usuario.usua_acceso_movil = usua_acceso_movil;
    usuario.usua_acceso_api = usua_acceso_api;
    usuario.usua_estado = usua_estado;
    usuario.usua_opciones = usua_opciones;
    usuario.usua_crypt_pass = usua_crypt_pass;
    usuario.usua_selfie_tecnico = usua_selfie_tecnico;
    usuario.api_token = api_token;
    usuario.api_token_expires_in = api_token_expires_in;

    // Validate
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(usuario, validationOpt);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // PENDIENTE REALIZAR VALIDACIÓN DE REGISTRO EXISTENTE.

    // TODO: HASH PASSWORD
    const userRepository = getRepository(Usuario);
    let retorno: Usuario;
    try {
      // TODO: pendiente implementación.
      //usuario.hashPassword();
      retorno = await userRepository.save(usuario);
    } catch (e) {
      return res.status(409).json({ message: 'Username already exist' , exception: JSON.stringify(e)});
    }
    // All ok
    res.json({message: 'User created', user_id: retorno.usua_id});
  };

  static edit = async (req: Request, res: Response) => {
    let user: Usuario;
    const { id } = req.params;
    const { usua_login } = req.body;

    const userRepository = getRepository(Usuario);
    // Try get user
    try {
      user = await userRepository.findOneOrFail(id);
      user.usua_login = usua_login;
    } catch (e) {
      return res.status(404).json({ message: 'User not found' });
    }
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(user, validationOpt);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // Try to save user
    try {
      await userRepository.save(user);
    } catch (e) {
      return res.status(409).json({ message: 'Username already in use' });
    }

    res.status(201).json({ message: 'User update' });
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userRepository = getRepository(Usuario);
    let user: Usuario;

    try {
      user = await userRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove user
    userRepository.delete(id);
    res.status(201).json({ message: ' User deleted' });
  };

}

export default UsuarioController;

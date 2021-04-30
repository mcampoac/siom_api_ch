import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Usuario } from '../entity/User';
import { validate } from 'class-validator';

export class UserController {

    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(Usuario);
        const users = await userRepository.find();

        if (users.length > 0) {
            res.send(users);
        }else{
            res.status(404).json({message: 'Not result'});
        }
    };

    static getById = async (req: Request, res: Response) => {
        const {id} = req.params;
        const userRepository = getRepository(Usuario);

        try {
            const user = await userRepository.findOneOrFail(id);
            res.send(user);    
        } catch (error) {
            res.status(404).json({message: 'Not Result'});
        }
    };
/*
    static newUser = async (req: Request, res: Response) => {
        const {username, password, role} = req.body;
        const user = new Usuario();

        user.username = username;
        user.password = password;
        user.role = role;

        //validaciones

        const errors = await validate(user);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        // TODO : HASH PASSWORD

        const userRepository = getRepository(Usuario);
        try {
            await userRepository.save(user);
        } catch (error) {
            return res.status(409).json({message: ' Username already exist'});
        }
        //All ok
        res.send('User create!');
    };
*/
    static editUser = async (req: Request, res: Response) => {
        let user;
        const {id} = req.params;
        const {username, role} = req.body;

        const userRepository = getRepository(Usuario);
        // Try get user
        try {
            user = await userRepository.findOneOrFail(id);
        } catch (error) {
            return res.status(404).json({message:'User not found'});
        }

        user.username = username;
        user.role = role;

        const errors = await validate(user);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        // try to save user

        try {
            await userRepository.save(user);
        } catch (error) {
            return res.status(409).json({message: 'Username already in use'});
        }

        res.status(201).json({message: 'User Update'});
    };

    static deleteUser = async (req: Request, res: Response) => {
        const {id} = req.params;
        const userRepository = getRepository(Usuario);
        let user : Usuario;
        
        try {
            user = await userRepository.findOneOrFail(id);
        } catch (error) {
            return res.status(404).json({message: 'User not found'});
        }

        // remove user
        userRepository.delete(id);
        res.status(201).json({message:'User delete'});
    };
}

export default UserController;
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Usuario } from '../entity/User';

class AuthController {
    static login = async (req: Request, res: Response) =>{
        const {username, password} = req.body;

        if (!(username && password)) {
            return res.status(400).json({message: 'Username & Password are required!'});
        }

        const userRepository = getRepository(Usuario);
        let user: Usuario;

        try {
            user = await userRepository.findOneOrFail({ where:{username} });
        } catch (error) {
            return res.status(400).json({message:' Username or password incorrect!'});
        }

        res.send(user);
    }
}
export default AuthController;
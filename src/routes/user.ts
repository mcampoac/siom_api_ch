import { UserController } from '../controller/UserController';
import { Router } from 'express';

const router = Router();

// Obtener todos los usuarios - Get all users
router.get('/', UserController.getAll); //Metodo

// Obtener un usuario - Get one user
router.get('/', UserController.getById);


// Crear un usuario - Create a new user
//router.post('/', UserController.newUser);


// Editar usuario - Edit user
router.patch('/', UserController.editUser);


// Eliminar un usuario - Delete user
router.delete('/', UserController.deleteUser);

export default router;
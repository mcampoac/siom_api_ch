import { UserController } from '../controller/UserController';
import { Router } from 'express';

const router = Router();

// Obtener todos los usuarios - Get all users
router.get('/', UserController.getAll);

// Obtener un usuario - Get one user
//router.get('/:id', UserController.getById);

// Crear un usuario - Create a new user
//router.post('/', UserController.new);

// Editar usuario - Edit user
//router.patch('/:id', UserController.edit);

// Eliminar un usuario - Delete user
//router.delete('/:id', UserController.delete);

export default router;

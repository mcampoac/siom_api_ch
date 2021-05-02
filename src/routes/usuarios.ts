import { UsuarioController } from '../controller/UsuarioController';
import { Router } from 'express';

const router = Router();

// Obtener todos los usuarios - Get all users
router.get('/', UsuarioController.getAll);

// Obtener un usuario - Get one user
router.get('/:id', UsuarioController.getById);

// Crear un usuario - Create a new user
//router.post('/', UsuarioController.new);

// Editar usuario - Edit user
//router.patch('/:id', UsuarioController.edit);

// Eliminar un usuario - Delete user
//router.delete('/:id', UsuarioController.delete);

export default router;

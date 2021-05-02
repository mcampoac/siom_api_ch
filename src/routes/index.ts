
import { Router } from 'express';

import auth from './auth';
import user from './user';
import usuarios from './usuarios';

const routes = Router();

//routes.use('/auth', auth);
//routes.use('/users', user);
routes.use('/usuariossiom', usuarios);

export default routes;

import { Router } from 'express';

import auth from './auth';
import usuarios from './usuarios';

const routes = Router();

//routes.use('/auth', auth);
routes.use('/usuariossiom', usuarios);

export default routes;
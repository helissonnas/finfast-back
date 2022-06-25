import { routerFactory } from './utils';

import User from '../domains/User';
import Family from '../domains/Family';

module.exports = routerFactory(User, Family);

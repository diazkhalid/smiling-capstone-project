/* eslint-disable linebreak-style */

import Beranda from '../views/pages/beranda';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import TentangKami from '../views/pages/tentang-kami';

const routes = {
  '/': Beranda,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/tentang-kami': TentangKami,
};

export default routes;

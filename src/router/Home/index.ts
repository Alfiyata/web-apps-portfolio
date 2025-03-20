import HomeLayout from '@layouts/Home';
import HomeView from './home';

const homeRoutes = {
  path: '/',
  component: HomeLayout,
  redirect: '/',
  children: [
    HomeView
  ]
};

export default homeRoutes;

import HomeLayout from '@layouts/Home';
import ContactView from './contact';

const contactRoutes = {
  path: '/contact',
  component: HomeLayout,
  redirect: '/contact',
  children: [
    ContactView
  ]
};

export default contactRoutes;

import HomeLayout from '@layouts/Home';
import PortfolioCRM from '../Portfolio/crm';

const portfolioRoutes = {
  path: '/portfolio',
  component: HomeLayout,
  redirect: '/crm',
  children: [
    PortfolioCRM
  ]
};

export default portfolioRoutes;

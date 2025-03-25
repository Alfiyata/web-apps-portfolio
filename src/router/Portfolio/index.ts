import HomeLayout from '@layouts/Home';
import PortfolioCRM from '../Portfolio/crm';
import PortfolioOMS from '../Portfolio/oms';

const portfolioRoutes = {
  path: '/portfolio',
  component: HomeLayout,
  redirect: '/crm',
  children: [
    PortfolioCRM,
    PortfolioOMS
  ]
};

export default portfolioRoutes;

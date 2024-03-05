import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';
import { CATALOG_PATH, FAVORITES_PATH, HOME_PATH } from './pages/routes';

const App = () => {
 

  const ROUTES = [
    {
      path: HOME_PATH,
      element: <Home />,
    },
    {
      path: CATALOG_PATH,
      element: <Catalog />,
    },
    {
      path: FAVORITES_PATH,
      element: <Favorites />,
    },
  ];

  return (
    <Layout>
      <Routes>
        {ROUTES.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;

import { NavLink } from 'react-router-dom';
import { CATALOG_PATH, FAVORITES_PATH, HOME_PATH } from '../../pages/routes';

const Layout = ({ children }) => {
  return (
    <>
      <header className="container flex justify-center items-center gap-[20px] mt-[40px]">
        {[HOME_PATH, CATALOG_PATH, FAVORITES_PATH].map((path, index) => {
          const header = ['Home', 'Catalog', 'Favorites'];
          return (
            <NavLink to={path} key={path}  className={({ isActive }) => {
              return (
                'py-[8px] px-[16px] rounded-[200px] border-[1px] text-[14px] leading-[1.6] font-medium dark:border-border-color border-border-color-for-light ' +
                (!isActive
                  ? 'text-primary-text-button-color dark:text-primary-text-color bg-transparent'
                  : 'text-white-text-color bg-primary-text-button-color transition shadow-lg shadow-primary-text-button-color/50 dark:shadow-primary-text-color/50 ')
              );
            }}>
              {header[index]}
            </NavLink>
          );
        })}
      </header>
      <main className='container'>{children}</main>

      <footer className='h-[200px]'></footer>
    </>
  );
};

export default Layout;

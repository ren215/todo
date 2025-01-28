import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import SideBar from '../SideBar';

import './index.scss';

export const LayoutContext = createContext(
  {} as {
    currentPage: 'home' | 'message';
    setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'message'>>;
  }
);

const Layout = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'message'>('home');

  return (
    <LayoutContext.Provider value={{ currentPage, setCurrentPage }}>
      <div className="layout-container">
        <Header items={{ left: <div>home</div> }} />
        <main>
          <SideBar />
          <Outlet />
        </main>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;

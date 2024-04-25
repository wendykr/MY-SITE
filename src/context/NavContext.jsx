import { createContext, useContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <NavContext.Provider value={{
      isOpenMenu, setIsOpenMenu
    }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
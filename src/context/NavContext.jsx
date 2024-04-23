import { createContext, useContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  return (
    <NavContext.Provider value={{
      isOpenHamburger, setIsOpenHamburger
    }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
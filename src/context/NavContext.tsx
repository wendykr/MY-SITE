import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavContextProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
}

export const NavContext = createContext<NavContextProps>({
  isOpenMenu: false,
  setIsOpenMenu: () => {},
});

interface NavProviderProps {
  children: ReactNode;
}

export const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
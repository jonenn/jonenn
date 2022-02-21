import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
   const [showMenu, setShowMenu] = useState(false);
   return (
      <DataContext.Provider value={{ showMenu, setShowMenu }}>
         {children}
      </DataContext.Provider>
   );
};

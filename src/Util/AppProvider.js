// AppProvider.js
import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState(initialData);

  return (
    <AppContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

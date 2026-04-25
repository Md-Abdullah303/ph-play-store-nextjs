'use client'
import React, { createContext, useState } from "react";

export const InstalledAppContext = createContext();

const InstallAppProvider = ({ children }) => {
    const [installApp, setInstallApp] = useState([]);


    const data = {
        myName: "abdullah",
        installApp,
        setInstallApp,
    }
  return (
    <InstalledAppContext.Provider value={data}>
        {children}
    </InstalledAppContext.Provider>
  );
};

export default InstallAppProvider;
// export default InstalledAppProvider;

import { createContext, useContext, useState } from "react";

export const UIcontext = createContext();

export const UIprovider = ({ children }) => {
  const [employerTabData, setEmployerTabData] = useState([]);
  return (
    <UIcontext.Provider value={{ employerTabData, setEmployerTabData }}>
      {children}
    </UIcontext.Provider>
  );
};

export default function useUI() {
  return useContext(UIcontext);
}

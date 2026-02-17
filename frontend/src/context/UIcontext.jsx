import { createContext, useContext, useState } from "react";

export const UIcontext = createContext();

export const UIprovider = ({ children }) => {
  const [employerTabData, setEmployerTabData] = useState([]);
  const [employerTabController, setEmployerTabController] = useState("");
  return (
    <UIcontext.Provider
      value={{
        employerTabData,
        setEmployerTabData,
        employerTabController,
        setEmployerTabController,
      }}
    >
      {children}
    </UIcontext.Provider>
  );
};

export default function useUI() {
  return useContext(UIcontext);
}

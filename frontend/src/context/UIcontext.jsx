import { createContext, useContext, useState } from "react";

export const UIcontext = createContext();

export const UIprovider = ({ children }) => {
  const [otpEmail, setOtpEmail] = useState("");
  return (
    <UIcontext.Provider value={{ otpEmail, setOtpEmail }}>
      {children}
    </UIcontext.Provider>
  );
};

export default function useUI() {
  return useContext(UIcontext);
}

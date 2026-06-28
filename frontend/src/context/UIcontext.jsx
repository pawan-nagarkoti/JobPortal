import { createContext, useContext, useState } from "react";
import { _post } from "../lib/api";
import { deleteCookie } from "../lib/cookies";
import { showSuccess } from "../lib/toast";
import { useNavigate } from "react-router-dom";

export const UIcontext = createContext();

export const UIprovider = ({ children }) => {
  const [employerTabData, setEmployerTabData] = useState([]);
  const [employerTabController, setEmployerTabController] = useState("");
  const [applicantTabController, setApplicantTabController] = useState("");
  const [applicantSettingsTabData, setApplicantSettingsTabData] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  // logout functionality
  const logout = async () => {
    try {
      const logoutResponse = await _post("api/auth/logout");
      if (logoutResponse.data.success) {
        deleteCookie("refreshToken");
        deleteCookie("accessToken");
        deleteCookie("loginUserInfo");
        navigate("/");
        showSuccess("Logout successfully");
      }
    } catch (error) {
      console.log("errror while logout", error);
    } finally {
    }
  };
  return (
    <UIcontext.Provider
      value={{
        employerTabData,
        setEmployerTabData,
        employerTabController,
        setEmployerTabController,
        logout,
        applicantTabController,
        setApplicantTabController,
        applicantSettingsTabData,
        setApplicantSettingsTabData,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </UIcontext.Provider>
  );
};

export default function useUI() {
  return useContext(UIcontext);
}

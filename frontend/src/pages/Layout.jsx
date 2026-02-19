import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/other/Header";
import Footer from "../components/other/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

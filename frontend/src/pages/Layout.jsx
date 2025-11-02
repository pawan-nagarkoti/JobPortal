import { Outlet } from "react-router-dom";
import Header from "../components/other/Header";
import Footer from "../components/other/Footer";
import GlobalSearchBar from "../components/other/GlobalSearchBar";

export default function Layout() {
  return (
    <>
      <Header />
      <GlobalSearchBar />
      <Outlet />
      <Footer />
    </>
  );
}

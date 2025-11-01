import { Outlet } from "react-router-dom";
import Header from "../../components/other/header";
import Footer from "../../components/other/footer";
import GlobalSearchBar from "../../components/other/globalSearchBar";

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

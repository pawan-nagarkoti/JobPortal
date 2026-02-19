import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/other/Header";
import Footer from "../components/other/Footer";
import GlobalSearchBar from "../components/other/GlobalSearchBar";
import { useEffect, useState } from "react";

export default function Layout() {
  const location = useLocation();
  const isHide =
    location.pathname === "/create/employer-profile" || "/profile-completed";
  return (
    <>
      <Header />
      {!isHide && <GlobalSearchBar />}
      <Outlet />
      <Footer />
    </>
  );
}

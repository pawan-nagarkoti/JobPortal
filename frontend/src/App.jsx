import { Route, Routes } from "react-router-dom";
import Home from "./pages/other/home";
import Layout from "./pages/other/layout";
import Employer from "./pages/employer/employer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/emp" element={<Employer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

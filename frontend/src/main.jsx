import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "@/components/ui/sonner";
import { UIprovider } from "./context/UIcontext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <UIprovider>
      <App />
      <Toaster position="bottom-right" richColors />
    </UIprovider>
  </BrowserRouter>
  // </StrictMode>,
);

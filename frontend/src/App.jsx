import React from "react";
import { Router } from "./router/Router";
import "./App.css";
import { OpenDownloadProvider } from "./providers/OpenDownloadProvider";
import { OpenCreateProvider } from "./providers/OpenCreateProvider";

export default function App() {
  return (
    <OpenCreateProvider>
      <OpenDownloadProvider>
        <Router />
      </OpenDownloadProvider>
    </OpenCreateProvider>
  );
}

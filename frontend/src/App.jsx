import React from "react";
import { Router } from "./router/Router";
import "./App.css";
import { OpenDownloadProvider } from "./providers/OpenDownloadProvider";
import { CourseProvider } from "./providers/CourseProvider";
import { OpenCreateProvider } from "./providers/OpenCreateProvider";

export default function App() {
  return (
    <CourseProvider>
      <OpenCreateProvider>
        <OpenDownloadProvider>
          <Router />
        </OpenDownloadProvider>
      </OpenCreateProvider>
    </CourseProvider>
  );
}

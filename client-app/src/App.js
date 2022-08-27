import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Dashboard } from "./app/Dashboard";
import { Error } from "./app/Error";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./app/Game";
import { Constraction } from "./app/Constraction";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/construction" element={<Constraction />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    )
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Dashboard } from "./app/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4000);
  }
  return (
    !loading && (
    <div className="App">
      <Dashboard />
      
    </div>)
  );
}

export default App;

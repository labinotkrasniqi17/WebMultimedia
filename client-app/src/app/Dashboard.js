import axios from "axios";
import React, { useEffect } from "react";
import { Footer, Header, Body } from "./layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/api").catch(function (error) {
      if (error.message == "Network Error") {
        // window.location.href("/test");
        navigate("/construction");
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

import React from "react";
import { FooterTxtAnimation } from "./FooterTxtAnimation";
export const Footer = () => {
  const scriptCode = ``
  return (
   
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div id="copyright">
              <FooterTxtAnimation/>
                <p>
                  Copyright &copy; 2022 <a href="/"> - LoSo</a>
                
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="scroll-top">
              
                <a href="#HOME" id="scroll-to-top">
                  <i className="fa fa-angle-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
    </div>
    
  );
};

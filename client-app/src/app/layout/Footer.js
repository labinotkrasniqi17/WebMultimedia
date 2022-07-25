import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div id="copyright">
                <p>
                  Copyright &copy; 2022 <a href="/"> - LoSo</a>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="scroll-top">
                <a href="#HOME" id="scroll-to-top">
                  <i class="fa fa-angle-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.min.js"></script>

      <script src="js/jquery.bxslider.min.js"></script>

      <script src="js/jquery.waypoints.min.js"></script>
      <script src="js/jquery.counterup.min.js"></script>

      <script src="js/wow.min.js"></script>

      <script src="js/custom.js"></script>

      <script src="./js/main.js"></script>
    </div>
  );
};

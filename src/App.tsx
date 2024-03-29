import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./css/bootstrap.min.css";
import "./css/jquery-ui.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/widgets.css";
import Sidebar from "./tiles/slidebar/Sidebar";
import Header from "./tiles/header/Header";
import Slidbox from "./tiles/utils/Slidebox";
import Charts from "./tiles/contents/chart/Charts";
import Dashboard from "./tiles/contents/Contents";
import UiElements from "./tiles/contents/ui/UiElements";
import Forms from "./tiles/contents/forms/Forms";
import Polling from "./tiles/contents/polling/Polling";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Charts/:id" element={<Charts />}></Route>
          <Route path="/UiElement" element={<UiElements />}></Route>
          <Route path="/Forms" element={<Forms />}></Route>
          <Route path="/Polling" element={<Polling />}></Route>
        </Routes>
      </div>
      <Slidbox />
      <span className="totop">
        <a href="#">
          <i className="fa fa-chevron-up"></i>
        </a>
      </span>
      {/* <!-- Javascript files --> */}
      {/* <!-- jQuery --> */}
      <script src="js/jquery.js"></script>
      {/* <!-- Bootstrap JS --> */}
      <script src="js/bootstrap.min.js"></script>
      {/* <!-- jQuery UI --> */}
      <script src="js/jquery-ui.min.js"></script>
      {/* <!-- jQuery Flot --> */}
      <script src="js/excanvas.min.js"></script>
      <script src="js/jquery.flot.js"></script>
      <script src="js/jquery.flot.resize.js"></script>
      <script src="js/jquery.flot.pie.js"></script>
      <script src="js/jquery.flot.stack.js"></script>
      {/* <!-- Sparklines --> */}
      <script src="js/sparklines.js"></script>
      {/* <!-- jQuery Gritter --> */}
      <script src="js/jquery.gritter.min.js"></script>
      {/* <!-- Respond JS for IE8 --> */}
      <script src="js/respond.min.js"></script>
      {/* <!-- HTML5 Support for IE --> */}
      <script src="js/html5shiv.js"></script>
      {/* <!-- Custom JS --> */}
      <script src="js/custom.js"></script>

      {/* <!-- Script for this page --> */}
      <script src="js/sparkline-index.js"></script>
    </>
  );
};

export default App;

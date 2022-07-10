import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/jquery-ui.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/widgets.css";
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Slidbox from "./Slidebox";

const App: React.FC = () => {
  return (
    <>
      {/* <head>
        <meta charSet="utf-8" />
        <title>Dashboard - MetroKing</title>
        <meta name="description" content="Your description" />
        <meta name="keywords" content="Your,Keywords" />
        <meta name="author" content="ResponsiveWebInc" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/jquery.gritter.css" />
        <link href="css/font-awesome.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/widgets.css" rel="stylesheet" />
        <link rel="shortcut icon" href="#" />
      </head> */}
      {/* <body> */}
      <Header />
      <div className="content">
        <Sidebar />
        <Mainbar />
        <div className="clearfix"></div>
      </div>
      <Slidbox />
      {/* <!--/ Content ends --> */}
      {/* </body> */}
    </>
  );
};

export default App;

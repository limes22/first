import React from "react";
import "../../../css/bootstrap.min.css";
import "../../../css/jquery-ui.css";
import "../../../css/font-awesome.min.css";
import "../../../css/style.css";
import "../../../css/widgets.css";
import MyChart from "./MyChart";
import { data } from "jquery";

const Charts = () => {
  return (
    <>
      {/* <!-- Main content starts --!> */}
      <div className="content">
        {/* <!-- Main bar --!> */}
        <div className="mainbar">
          {/* <!-- Page heading --!> */}
          <div className="page-head">
            {/* <!-- Page heading --!> */}
            <h2 className="pull-left">
              Charts
              {/* <!-- page meta --!> */}
              <span className="page-meta">Something Goes Here</span>
            </h2>
            {/* <!-- Breadcrumb --!> */}
            <div className="bread-crumb pull-right">
              <a href="index.html">
                <i className="fa fa-home"></i> Home
              </a>
              {/* <!-- Divider --!> */}
              <span className="divider">/</span>
              <a href="#" className="bread-current">
                Charts
              </a>
            </div>
            <div className="clearfix"></div>
          </div>
          {/* <!--/ Page heading ends --!> */}

          {/* <!-- Matter --!> */}
          <div className="matter">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <MyChart />
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ Matter ends --!> */}
        </div>
        {/* <!--/ Mainbar ends --!> */}
        <div className="clearfix"></div>
      </div>
      {/* <!--/ Content ends --!> */}
      <script src="../../../js/jquery.flot.pie.js"></script>
    </>
  );
};

export default Charts;

import React from "react";
import "../../../css/bootstrap.min.css";
import "../../../css/jquery-ui.css";
import "../../../css/font-awesome.min.css";
import "../../../css/style.css";
import "../../../css/widgets.css";

const MyChart = () => {
  return (
    <>
      {/* <!-- Pie chart starts --!> */}

      <div className="widget wviolet">
        <div className="widget-head">
          <div className="pull-left">Pie Chart</div>
          <div className="widget-icons pull-right">
            <a href="#" className="wminimize">
              <i className="fa fa-chevron-up"></i>
            </a>
            <a href="#" className="wclose">
              <i className="fa fa-times"></i>
            </a>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="widget-content">
          <div className="padd">
            <div className="row">
              <div className="col-md-4">
                <div id="pie-chart"></div>
              </div>
              <div className="col-md-4">
                <div id="pie-chart2"></div>
              </div>
              <div className="col-md-4">
                <div id="pie-chart3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pie chart ends --!> */}
    </>
  );
};

export default MyChart;

import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import "../../../css/bootstrap.min.css";
import "../../../css/jquery-ui.css";
import "../../../css/font-awesome.min.css";
import "../../../css/style.css";
import "../../../css/widgets.css";
import axios from "axios";

interface MyChartProps {
  viewChart: any;
}

const MyChart = ({ viewChart }: MyChartProps) => {
  return (
    <>
      {/* <!-- Pie chart starts --> */}

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
          <div>
            {/* <!-- Matter --> */}

            <div className="matter">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="widget wred">
                      <div className="widget-head">
                        <div className="pull-left">Tables</div>
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
                        <div className="table-responsive">
                          <table className="table table-bordered ">
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>body</th>
                              </tr>
                            </thead>
                            <tbody>
                              <>
                                <tr>
                                  <td>{viewChart.data[0].id}</td>
                                  <td>{viewChart.data[0].title}</td>
                                  <td>{viewChart.data[0].body}</td>
                                </tr>
                                <tr>
                                  <td>{viewChart.data[1].id}</td>
                                  <td>{viewChart.data[1].title}</td>
                                  <td>{viewChart.data[1].body}</td>
                                </tr>
                                <tr>
                                  <td>{viewChart.data[2].id}</td>
                                  <td>{viewChart.data[2].title}</td>
                                  <td>{viewChart.data[2].body}</td>
                                </tr>
                                <tr>
                                  <td>{viewChart.data[3].id}</td>
                                  <td>{viewChart.data[3].title}</td>
                                  <td>{viewChart.data[3].body}</td>
                                </tr>
                              </>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/ Matter ends --> */}
          </div>
        </div>
      </div>
      {/* <!-- Pie chart ends --> */}
    </>
  );
};

export default MyChart;

import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import "../../../css/bootstrap.min.css";
import "../../../css/jquery-ui.css";
import "../../../css/font-awesome.min.css";
import "../../../css/style.css";
import "../../../css/widgets.css";
import axios from "axios";

const MyChart = () => {
  const [viewChart, setViewChart] = useState<any>([]);

  async function getPosts() {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    setViewChart(res.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const fruits = { 'banana': 'banana', 'A': 'A', 'C': 'C' };
  console.log(Object.keys(fruits))


  console.log(viewChart);
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
          <div className="table-responsive">
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>body</th>
                </tr>
                <hr></hr>
              </thead>
              <tbody>
                {viewChart.map((element: any, idx: number) => (
                  <tr>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                    <td>{element.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Pie chart ends --> */}
    </>
  );
};

export default MyChart;

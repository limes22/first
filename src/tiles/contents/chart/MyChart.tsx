import React, { Fragment } from "react";
import "../../../css/bootstrap.min.css";
import "../../../css/jquery-ui.css";
import "../../../css/font-awesome.min.css";
import "../../../css/style.css";
import "../../../css/widgets.css";

interface MyChartProps {
  viewChart: any;
}

const MyChart = ({ viewChart }: MyChartProps) => {
  return (
    <>
      <h1>Practice</h1>
        <h2>제목</h2>
        {
            viewChart.map((element: any, idx: number) => (
                <h2
                >
                {element.id}
                {element.title}
                {element.body}
                </h2>
            ))
        }
    </>
  );
      }

export default MyChart;

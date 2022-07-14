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
    							{/* <!-- Pie chart starts --> */}

<div className="widget wviolet">

<div className="widget-head">
  <div className="pull-left">Pie Chart</div>
  <div className="widget-icons pull-right">
  <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
  <a href="#" className="wclose"><i className="fa fa-times"></i></a>
  </div>
  <div className="clearfix"></div>
</div>


<div className="widget-content">
										<div className="table-responsive">
                      {viewChart.map((element: any, idx: number)=> (
                        <h2>
											<table className="table table-bordered ">
												{/* <thead>
													<tr>
                          {element.id}
													</tr>
												</thead> */}
												<tbody>
													<tr>
													  <td>{element.id}</td>
													  <td>{element.title}</td>
													  <td>{element.body}</td>
													</tr>                                                                 
												</tbody>
											</table>
                        </h2>
                      ))}

										</div>
									</div>
</div>
{/* <!-- Pie chart ends --> */}     
    </>
  );
      }

export default MyChart;

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
                      
											<table className="table table-bordered ">
												<thead>
													<tr>
                          <td>id</td>
                          <td>title</td>
                          <td>body</td>
													</tr>
												</thead>
                        {viewChart.map((element: any, idx: number)=> (
												<tbody>
													<tr>
													  <td>{element.id}</td>
													  <td>{element.title}</td>
													  <td>{element.body}</td>
													</tr>                                                                 
												</tbody>
                        ))}
											</table>                   
                      

										</div>
									</div>
</div>
{/* <!-- Pie chart ends --> */}     
    </>
  );
      }

export default MyChart;

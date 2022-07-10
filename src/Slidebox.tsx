


import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/jquery-ui.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/widgets.css";

const Sidebar = () => {
    return (
        <>
		{/* <!-- Notification box starts --> */}
		<div className="slide-box">
			{/* <!-- Notification box head --> */}
			<div className="slide-box-head bred">
			  {/* <!-- Title --> */}
			  <div className="pull-left">Notification Box</div>          
			  {/* <!-- Icon --> */}
			  <div className="slide-icons pull-right">
				<a href="#" className="sminimize"><i className="fa fa-chevron-down"></i></a> 
				<a href="#" className="sclose"><i className="fa fa-times"></i></a>
			  </div>
			  <div className="clearfix"></div>
			</div>

			<div className="slide-content">

			  {/* <!-- It is default bootstrap nav tabs. See official bootstrap doc for doubts --> */}
				<ul className="nav nav-tabs">
				  {/* <!-- Tab links --> */}
				  <li className="active"><a href="#tab1" data-toggle="tab"><i className="fa fa-file-o"></i></a></li>
				  <li><a href="#tab2" data-toggle="tab"><i className="fa fa-phone"></i></a></li>
				  <li><a href="#tab3" data-toggle="tab"><i className="fa fa-comments"></i></a></li>
				</ul>

				{/* <!-- Tab content --> */}
				
				<div className="tab-content">

					  <div className="tab-pane active" id="tab1">

												{/* <!-- Earning item --> */}
						<div className="slide-data">
						  <div className="slide-data-text">Today Earnings</div>
						  <div className="slide-data-result">$50,000 <i className="fa fa-arrow-up red"></i> </div>
						  <div className="clearfix"></div>
						</div>

						{/* <!-- Earning item --> */}
						<div className="slide-data">
						  <div className="slide-data-text">Yesterday Earnings</div>
						  <div className="slide-data-result">$46,000 <i className="fa fa-arrow-down green"></i> </div>
						  <div className="clearfix"></div>
						</div>     

						{/* <!-- Earning item --> */}
						<div className="slide-data">
						  <div className="slide-data-text">Weeks Earnings</div>
						  <div className="slide-data-result">$43,000 <i className="fa fa-arrow-up red"></i> </div>
						  <div className="clearfix"></div>
						</div> 

						{/* <!-- Earning item --> */}
						<div className="slide-data">
						  <div className="slide-data-text">Months Earnings</div>
						  <div className="slide-data-result">$32,000 <i className="fa fa-arrow-down green"></i> </div>
						  <div className="clearfix"></div>
						</div> 

						{/* <!-- Earning item --> */}
						<div className="slide-data">
						  <div className="slide-data-text">Years Earnings</div>
						  <div className="slide-data-result">$15,000 <i className="fa fa-arrow-up red"></i> </div>
						  <div className="clearfix"></div>
						</div>                

					  </div>

					  <div className="tab-pane" id="tab2">
						<h5>Have some content here.</h5>
						<p>Aliquam dui libero, pharetra nec venenatis in, scelerisque quis odio. In hac habitasse platea dictumst. Etiam porta placerat turpis, eget fermentum neque egestas at. Vestibulum ullamcorper, augue a sollicitudin vestibulum, orci purus semper felis, lobortis consequat nisi nunc eu enim. </p>
					  </div>

					  <div className="tab-pane" id="tab3">
					<h5>Have some content here.</h5>
					<p>Aliquam dui libero, pharetra nec venenatis in, scelerisque quis odio. In hac habitasse platea dictumst. Etiam porta placerat turpis, eget fermentum neque egestas at. Vestibulum ullamcorper, augue a sollicitudin vestibulum, orci purus semper felis, lobortis consequat nisi nunc eu enim.</p>
				  </div>              

				</div>

			</div>
      
		</div>
		{/* <!-- Notification box ends -->   */}
        </>
    );
};

export default Sidebar;
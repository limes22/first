import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/jquery-ui.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/widgets.css";

const Mainbar = () => {
    return (
        <>
        			{/* <!-- Main bar --> */}
			<div className="mainbar">
      
      {/* <!-- Page heading --> */}
      <div className="page-head">
      {/* <!-- Page heading --> */}
          <h2 className="pull-left">Dashboard 
            {/* <!-- page meta --> */}
            <span className="page-meta">Something Goes Here</span>
          </h2>
          {/* <!-- Breadcrumb --> */}
          <div className="bread-crumb pull-right">
            <a href="index.html"><i className="fa fa-home"></i> Home</a> 
            {/* <!-- Divider --> */}
            <span className="divider">/</span> 
            <a href="#" className="bread-current">Dashboard</a>
          </div>
          <div className="clearfix"></div>
      </div>
{/* <!--/ Page heading ends --> */}
      {/* <!-- Matter --> */}
      <div className="matter">
          <div className="container">
              {/* <!-- Today status. jQuery Sparkline plugin used. --> */}
              <div className="row">
                  <div className="col-md-12"> 
                      {/* <!-- List starts --> */}
                      <ul className="today-datas">
                          {/* <!-- List #1 --> */}
                          <li className="bred">
                            {/* <!-- Graph --> */}
                            <div className="pull-left"><span id="todayspark1" className="spark"></span></div>
                            {/* <!-- Text --> */}
                            <div className="datas-text pull-right"><span className="bold">12,000</span> Visitors/Day</div>

                            <div className="clearfix"></div>
                          </li>
                          <li className="bgreen">
                            {/* <!-- Graph --> */}
                            <div className="pull-left"><i className="fa fa-group"></i></div>
                            {/* <!-- Text --> */}
                            <div className="datas-text pull-right"><span className="bold">30,000</span> Members</div>

                            <div className="clearfix"></div>
                          </li>
                          <li className="blightblue">
                            {/* <!-- Graph --> */}
                            <div className="pull-left"><span id="todayspark2" className="spark"></span></div>
                            {/* <!-- Text --> */}
                            <div className="datas-text pull-right"><span className="bold">15.66%</span> Bounce Rate</div>

                            <div className="clearfix"></div>
                          </li>
                          <li className="bviolet">
                            {/* <!-- Graph --> */}
                            <div className="pull-left"><span id="todayspark3" className="spark"></span></div>
                            {/* <!-- Text --> */}
                            <div className="datas-text pull-right"><span className="bold">$22,000</span> Total Profit</div>

                            <div className="clearfix"></div>
                          </li> 
                      </ul> 
                  </div>
              </div>
              {/* <!--/ Today status ends --> */}
              {/* <!-- Dashboard Graph starts --> */}
              <div className="row">
                  <div className="col-md-8">
                      {/* <!-- Widget --> */}
                      <div className="widget wlightblue">
                          {/* <!-- Widget head --> */}
                          <div className="widget-head">
                            <div className="pull-left">Dashboard</div>
                            <div className="widget-icons pull-right">
                              <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                              <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                            </div>
                            <div className="clearfix"></div>
                          </div>             
                          {/* <!-- Widget content --> */}
                          <div className="widget-content">
                            <div className="padd">
                              {/* <!-- Bar chart (Blue color). jQuery Flot plugin used. --> */}
                              <div id="bar-chart"></div>
                            </div>
                          </div>
                          {/* <!-- Widget ends --> */}

                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="widget wblue">
                          <div className="widget-head">
                            <div className="pull-left">Today Status</div>
                            <div className="widget-icons pull-right">
                              <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                              <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                            </div>
                            <div className="clearfix"></div>
                          </div>             
                          <div className="widget-content">
                            <div className="padd">

                              {/* <!-- Visitors, pageview, bounce rate, etc., Sparklines plugin used --> */}
                              <ul className="current-status">
                                <li>
                                  <span id="status1"></span> <span className="bold">Visits : 2000</span> <i className="fa fa-arrow-up green"></i>
                                </li>
                                <li>
                                  <span id="status2"></span> <span className="bold">Unique Visitors : 1,345</span> <i className="fa fa-arrow-down red"></i>
                                </li>
                                <li>
                                  <span id="status3"></span> <span className="bold">Pageviews : 2000</span> <i className="fa fa-arrow-up green"></i>
                                </li>
                                <li>
                                  <span id="status4"></span> <span className="bold">Pages / Visit : 2000</span> <i className="fa fa-arrow-down red"></i>
                                </li>
                                <li>
                                  <span id="status5"></span> <span className="bold">Avg. Visit Duration : 2000</span> <i className="fa fa-arrow-down red"></i>
                                </li>
                                <li>
                                  <span id="status6"></span> <span className="bold">Bounce Rate : 2000</span> <i className="fa fa-arrow-up green"></i>
                                </li>   
                                <li>
                                  <span id="status7"></span> <span className="bold">% New Visits : 2000</span> <i className="fa fa-arrow-up green"></i>
                                </li>                                                                                          
                              </ul>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              
              {/* <!-- Dashboard graph ends --> */}
              {/* <!-- Chats, File upload and Recent Comments --> */}
              <div className="row">
                  <div className="col-md-4">         
                    {/* <!-- Chat Widget --> */}
                    <div className="widget wgreen">
                      {/* <!-- Widget title --> */}
                      <div className="widget-head">
                        <div className="pull-left">Chats</div>
                        <div className="widget-icons pull-right">
                          <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                          <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="widget-content">
                        {/* <!-- Widget content --> */}
                        <div className="padd">
                          
                          <ul className="chats">

                            {/* <!-- Chat by us. Use the class "by-me". --> */}
                            <li className="by-me">
                              {/* <!-- Use the class "pull-left" in avatar --> */}
                              <div className="avatar pull-left">
                                <img src="img/user.jpg" alt="" className="img-responsive" />
                              </div>

                              <div className="chat-content">
                                {/* <!-- In meta area, first include "name" and then "time" --> */}
                                <div className="chat-meta">Ashok <span className="pull-right">3 hours ago</span></div>
                                {/* Vivamus diam elit diam, consectetur dapibus adipiscing elit. */}
                                <div className="clearfix"></div>
                              </div>
                            </li> 

                            {/* <!-- Chat by other. Use the class "by-other". --> */}
                            <li className="by-other">
                              {/* <!-- Use the class "pull-right" in avatar --> */}
                              <div className="avatar pull-right">
                                <img src="img/user.jpg" alt=""/>
                              </div>

                              <div className="chat-content">
                                {/* <!-- In the chat meta, first include "time" then "name" --> */}
                                <div className="chat-meta">3 hours ago <span className="pull-right">Ravi</span></div>
                                {/* Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit. */}
                                <div className="clearfix"></div>
                              </div>
                            </li>   

                            <li className="by-me">
                              <div className="avatar pull-left">
                                <img src="img/user.jpg" alt=""/>
                              </div>

                              <div className="chat-content">
                                <div className="chat-meta">Ashok <span className="pull-right">4 hours ago</span></div>
                                Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit.
                                <div className="clearfix"></div>
                              </div>
                            </li>  

                            <li className="by-other">
                              {/* <!-- Use the class "pull-right" in avatar --> */}
                              <div className="avatar pull-right">
                                <img src="img/user.jpg" alt=""/>
                              </div>

                              <div className="chat-content">
                                {/* <!-- In the chat meta, first include "time" then "name" --> */}
                                <div className="chat-meta">3 hours ago <span className="pull-right">Ravi</span></div>
                                {/* Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit. */}
                                <div className="clearfix"></div>
                              </div>
                            </li>                                                                                  

                          </ul>

                        </div>
                      </div>


                        {/* <!-- Widget footer --> */}
                        <div className="widget-foot">
                            
                          {/* <!-- Chat input box --> */}
                            <form className="form-inline">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Type your message" />
                                
                              </div>
                              <button type="submit" className="btn btn-info">Send</button>
                            </form>

                        </div>

                    </div>

                  </div>
                  {/* <!-- File Upload widget --> */}
                  <div className="col-md-4">

                    <div className="widget wviolet">
                      {/* <!-- Widget title --> */}
                      <div className="widget-head">
                        <div className="pull-left">File Upload</div>
                        <div className="widget-icons pull-right">
                          <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                          <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="widget-content">
                        {/* <!-- Widget content -->
                        <!-- File upload list starts --> */}
                        <ul className="file-upload">

                          <li>
                            {/* <!-- Icon with file name --> */}
                            <strong><i className="fa fa-upload green"></i> File_Name_Here.Mp3</strong>
                            {/* <!-- Progress bar --> */}
                            <div className="progress progress-animated progress-striped active">
                                {/* <div className="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"> */}
            <div className="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                  <span className="sr-only">100% Complete</span>
                                </div>
                            </div>
                            {/* <!-- Upload details --> */}
                            <div className="file-meta">3.3 of 5MB - 5 mins - 1MB/Sec</div>
                            {/* <!-- Buttons --> */}
                            <div className="btn-groulp">
                              <button className="btn btn-sm btn-success"><i className="fa fa-play"></i> </button>
                              <button className="btn btn-sm btn-primary"><i className="fa fa-pause"></i> </button>
                              <button className="btn btn-sm btn-danger pull-right"><i className="fa fa-times"></i> </button>
                            </div>
                          </li>

                          <li>
                            <strong><i className="fa fa-ok red"></i> Second_File.Mp3</strong>
                            <div className="file-meta">5MB - 5 mins - Completed</div>
                          </li>

                          <li>
                            <strong><i className="fa fa-ok red"></i> Third_File_Here.Mp3</strong>
                            <div className="file-meta">5MB - 5 mins - Stopped</div>
                          </li>
                                                                 
                        </ul>

                      </div>

                      <div className="widget-foot">
                        <button className="btn btn-default pull-right">Clear All</button>
                        <div className="clearfix"></div>
                      </div>

                    </div>

                    <div className="widget worange">
                      {/* <!-- Widget title --> */}
                      <div className="widget-head">
                        <div className="pull-left">Browsers</div>
                        <div className="widget-icons pull-right">
                          <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                          <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="widget-content referrer">
                        {/* <!-- Widget content --> */}
                        
                        <table className="table  table-bordered ">
                          <tr>
                            {/* <th><center>#</center></th> */}
                            <th>Browsers</th>
                            <th>Visits</th>
                          </tr>
                          <tr>
                            <td><img src="img/icons/chrome.png" alt="" /></td>
                            <td>Google Chrome</td>
                            <td>3,005</td>
                          </tr> 
                          <tr>
                            <td><img src="img/icons/firefox.png" alt="" /></td>
                            <td>Mozilla Firefox</td>
                            <td>2,505</td>
                          </tr> 
                          <tr>
                            <td><img src="img/icons/ie.png" alt="" /></td>
                            <td>Internet Explorer</td>
                            <td>1,405</td>
                          </tr> 
                          <tr>
                            <td><img src="img/icons/opera.png" alt="" /></td>
                            <td>Opera</td>
                            <td>4,005</td>
                          </tr> 
                          <tr>
                            <td><img src="img/icons/safari.png" alt="" /></td>
                            <td>Safari</td>
                            <td>505</td>
                          </tr>                                                                    
                        </table>

                      </div>
                        <div className="widget-foot">
                        </div>
                    </div>

                  </div>
                  {/* <!-- Project widget --> */}
                  <div className="col-md-4">
                    <div className="widget wred">
                      {/* <!-- Widget title --> */}
                      <div className="widget-head">
                        <div className="pull-left">Project</div>
                        <div className="widget-icons pull-right">
                          <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                          <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="widget-content">
                        {/* <!-- Widget content --> */}
                        {/* <!-- Task list starts --> */}
                        <ul className="project">

                          <li>
                            <p className="clearfix">
                              {/* <!-- Checkbox --> */}
                              <input value="check1" type="checkbox" className="p-input" /> 
                              {/* <!-- Name --> */}
                              <span className="p-heading">Hospital Management System</span>
                            </p>

                            <p className="p-meta">
                              {/* <!-- Due date & % Completed --> */}
                              <span>Due : 26/2/2012 - 80% Done</span> 
                            </p>

                           
                              {/* <!-- Progress bar --> */}
                             <div className="progress progress-striped active">
                                {/* <div className="progress-bar progress-bar-info"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> */}
            <div className="progress-bar progress-bar-info"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                  <span className="sr-only">80% Complete</span>
                                </div>
                             </div>
                          </li>


                          <li>
                            <p className="clearfix">
                              {/* <!-- Checkbox --> */}
                              <input value="check1" type="checkbox" className="p-input" />
                              {/* <!-- Name --> */}
                              <span className="p-heading">School Download System</span>
                            </p>

                            <p className="p-meta">
                              {/* <!-- Due date & % Completed --> */}
                              <span>Due : 26/2/2012 - 80% Done</span> 
                            </p>

                            
                              {/* <!-- Progress bar --> */}
                              <div className="progress progress-striped active">
                                {/* <div className="progress-bar progress-bar-warning"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> */}
            <div className="progress-bar progress-bar-warning"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                  <span className="sr-only">90% Complete</span>
                                </div>
                              </div>
                          </li>

                          <li>
                            <p className="clearfix">
                              {/* <!-- Checkbox --> */}
                              <input value="check1" type="checkbox" className="p-input" /> 
                              {/* <!-- Name --> */}
                              <span className="p-heading">Question and Answers Script</span>
                            </p>

                            <p className="p-meta">
                              {/* <!-- Due date & % Completed --> */}
                              <span>Due : 26/2/2012 - 80% Done</span> 
                            </p>

                            
                              {/* <!-- Progress bar --> */}
                              <div className="progress progress-striped active">
                                {/* <div className="progress-bar progress-bar-danger"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> */}
            <div className="progress-bar progress-bar-danger"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                  <span className="sr-only">70% Complete</span>
                                </div>
                              </div>
                          </li>                                                              

                        </ul>
                        <div className="clearfix"></div>  


                      </div>
                      <div className="widget-foot">

                      </div>
                    </div>
                  </div>
                  {/* <!-- Server Status --> */}
                  <div className="col-md-4">
                    <div className="widget wlightblue">
                      {/* <!-- Widget title --> */}
                      <div className="widget-head">
                        <div className="pull-left">Server Status</div>
                        <div className="widget-icons pull-right">
                          <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                          <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="widget-content">
                        {/* <!-- Widget content --> */}
                        
                        <table className="table  table-bordered ">
                          <tr>
                            <td>Domain</td>
                            <td>sitedomain.com</td>
                          </tr> 
                          <tr>
                            <td>IP Address</td>
                            <td>192.425.2.4</td>
                          </tr> 
                          <tr>
                            <td>Disk Space</td>
                            <td>600GB / 60000GB</td>
                          </tr> 
                          <tr>
                            <td>Bandwidth</td>
                            <td>1000GB / 2000GB</td>
                          </tr> 
                          <tr>
                            <td>PHP Version</td>
                            <td>5.1.1</td>
                          </tr> 
                          <tr>
                            <td>MySQL Databases</td>
                            <td>10</td>
                          </tr>                                                                                                     
                        </table>

                      </div>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                      <div className="widget wblue">
                      <div className="widget-head">
                        <div className="pull-left">Curve Chart</div>
                        <div className="widget-icons pull-right">
                          <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                          <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="widget-content">
                        <div className="padd">
                          
                          {/* <!-- Curve chart --> */}

                          <div id="curve-chart"></div>

                          <hr />
                          {/* <!-- Hover location --> */}
                          <div id="hoverdata">Mouse hovers at
                          (<span id="x">0</span>, <span id="y">0</span>). <span id="clickdata"></span></div>          

                          {/* <!-- Skil this line.  */}
        {/* <div className="uni"><input id="enableTooltip" type="checkbox">Enable tooltip</div> --> */}

                        </div>
                      </div>
                      <div className="widget-foot">
                          {/* <!-- Footer goes here --> */}
                      </div>
                </div> 
              </div>
                  <div className="col-md-6">
                    <div className="widget wgreen">
                      <div className="widget-head">
                        <div className="pull-left">Quick Post</div>
                        <div className="widget-icons pull-right">
                          <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a> 
                          <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                        </div>  
                        <div className="clearfix"></div>
                      </div>
                      
                      <div className="widget-content">
                        <div className="padd">
                          
                            <div className="form quick-post">
                                            {/* <!-- Edit profile form (not working)--> */}
                                            <form className="form-horizontal">
                                                {/* <!-- Title --> */}
                                                <div className="form-group">
                                                  <label className="control-label col-lg-3" htmlFor="title">Title</label>
                                                  <div className="col-lg-9"> 
                                                    <input type="text" className="form-control" id="title" />
                                                  </div>
                                                </div>   
                                                {/* <!-- Content --> */}
                                                <div className="form-group">
                                                  <label className="control-label col-lg-3" htmlFor="content">Content</label>
                                                  <div className="col-lg-9">
                                                    <textarea className="form-control" id="content"></textarea>
                                                  </div>
                                                </div>                           
                                                {/* <!-- Cateogry --> */}
                                                <div className="form-group">
                                                  <label className="control-label col-lg-3">Category</label>
                                                  <div className="col-lg-9">                               
                                                      <select className="form-control">
                                                        <option value="">- Choose Cateogry -</option>
                                                        <option value="1">General</option>
                                                        <option value="2">News</option>
                                                        <option value="3">Media</option>
                                                        <option value="4">Funny</option>
                                                      </select>  
                                                  </div>
                                                </div>              
                                                {/* <!-- Tags --> */}
                                                <div className="form-group">
                                                  <label className="control-label col-lg-3" htmlFor="tags">Tags</label>
                                                  <div className="col-lg-9">
                                                    <input type="text" className="form-control" id="tags" />
                                                  </div>
                                                </div>
                                                
                                                {/* <!-- Buttons --> */}
                                                <div className="form-group">
                                                   {/* <!-- Buttons --> */}
                                                   <div className="col-lg-offset-3 col-lg-9">
                                                      <button type="submit" className="btn btn-success">Publish</button>
                                                      <button type="submit" className="btn btn-danger">Save Draft</button>
                                                      <button type="reset" className="btn btn-default">Reset</button>
                                                   </div>
                                                </div>
                                            </form>
                                          </div>
                        

                        </div>
                      </div>

                      <div className="widget-foot">
                          {/* <!-- Footer goes here --> */}
                      </div>

                    </div> 
                  </div>            
              </div>  
          </div>
      </div>
{/* <!--/ Matter ends --> */}
  </div>
{/* <!--/ Mainbar ends -->	    	 */}
        </>
    );
};

export default Mainbar;

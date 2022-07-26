import React from "react";
import "../../../css/bootstrap.min.css";
import "../../../css/jquery-ui.css";
import "../../../css/font-awesome.min.css";
import "../../../css/style.css";
import "../../../css/widgets.css";
import {useSelector} from "react-redux";

const UiElements = () => {
  // some verify logic
  const uiState = useSelector((state: any) => state.ui);
  console.log(uiState);
  return (
    <>
      <div className="mainbar">
        {/* <!-- Page heading --> */}
        <div className="page-head">
          {/* <!-- Page heading --> */}
          <h2 className="pull-left">
            User Interface
            {/* <!-- page meta --> */}
            <span className="page-meta">Something Goes Here</span>
          </h2>
          {/* <!-- Breadcrumb --> */}
          <div className="bread-crumb pull-right">
            <a href="index.html">
              <i className="fa fa-home"></i> Home
            </a>
            {/* <!-- Divider --> */}
            <span className="divider">/</span>
            <a href="#" className="bread-current">
              User Interface
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!--/ Page heading ends --> */}
        {/* <!-- Matter --> */}

        <div className="matter">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="widget wred">
                  <div className="widget-head">
                    <div className="pull-left">UI Elements</div>
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
                      <h5>Button Group</h5>
                      <div className="btn-group">
                        <button className="btn btn-danger">Left</button>
                        <button className="btn btn-success">Center</button>
                        <button className="btn btn-primary">Right</button>
                      </div>
                      <hr />

                      <h5>Toggle Button</h5>
                      <div className="make-switch">
                        <input
                          type="checkbox"
                          checked
                          data-on="primary"
                          data-off="info"
                        />
                      </div>

                      <div className="make-switch">
                        <input
                          type="checkbox"
                          data-on="info"
                          data-off="success"
                          checked
                        />
                      </div>

                      <div className="make-switch">
                        <input
                          type="checkbox"
                          data-on="success"
                          data-off="warning"
                          checked
                        />
                      </div>

                      <div className="make-switch">
                        <input
                          type="checkbox"
                          data-on="warning"
                          data-off="danger"
                          checked
                        />
                      </div>

                      <div className="make-switch">
                        <input
                          type="checkbox"
                          data-on="danger"
                          data-off="default"
                          checked
                        />
                      </div>

                      <div className="make-switch">
                        <input
                          type="checkbox"
                          data-on="default"
                          data-off="primary"
                          checked
                        />
                      </div>
                      <hr />

                      <h5>Button Dropdown</h5>
                      <div className="btn-group">
                        <button
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Action</a>
                          </li>
                          <li>
                            <a href="#">Another action</a>
                          </li>
                          <li>
                            <a href="#">Something else here</a>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <a href="#">Separated link</a>
                          </li>
                        </ul>
                      </div>
                      <hr />

                      <h5>Tabbable</h5>
                      <div className="tabbable">
                        <ul className="nav nav-tabs">
                          <li className="active">
                            <a href="#tab1" data-toggle="tab">
                              Section 1
                            </a>
                          </li>
                          <li>
                            <a href="#tab2" data-toggle="tab">
                              Section 2
                            </a>
                          </li>
                          <li>
                            <a href="#tab3" data-toggle="tab">
                              Section 3
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab1">
                            <p>I'm in Section 1.</p>
                          </div>
                          <div className="tab-pane" id="tab2">
                            <p>Howdy, I'm in Section 2.</p>
                          </div>
                          <div className="tab-pane" id="tab3">
                            <p>What up girl, this is Section 3.</p>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <h5>Pagination</h5>

                      <ul className="pagination">
                        <li>
                          <a href="#">Prev</a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>

                      <hr />

                      <h5>Labels</h5>
                      <span className="label label-default">Default</span>
                      <span className="label label-success">Success</span>
                      <span className="label label-warning">Warning</span>
                      <span className="label label-important">Important</span>
                      <span className="label label-info">Info</span>
                      <span className="label label-success">Success</span>
                      <hr />

                      <h5>Badges</h5>
                      <span className="badge">1</span>
                      <span className="badge badge-success">2</span>
                      <span className="badge badge-warning">3</span>
                      <span className="badge badge-important">4</span>
                      <span className="badge badge-info">5</span>
                      <span className="badge badge-inverse">6</span>
                      <hr />

                      <h5>Alerts</h5>
                      <div className="alert alert-warning">
                        Oh snap! Change a few things up and try submitting
                        again.
                      </div>
                      <div className="alert alert-success">
                        Well done! You successfully read this important alert
                        message.
                      </div>
                      <div className="alert alert-info">
                        Heads up! This alert needs your attention, but it's not
                        super important.
                      </div>
                      <hr />

                      <h5>Modal</h5>
                      {/* <!-- Button to trigger modal --> */}
                      <a
                        href="#myModal"
                        className="btn btn-info"
                        data-toggle="modal"
                      >
                        Launch demo modal
                      </a>

                      {/* <!-- Modal --> */}
                      <div
                        id="myModal"
                        className="modal fade"
                        role="dialog"
                        aria-labelledby="myModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                ×
                              </button>
                              <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-body">
                              <p>One fine body…</p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="widget-foot">
                    {/* <!-- Footer goes here --> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="widget wviolet">
                  <div className="widget-head">
                    <div className="pull-left">UI Elements</div>
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
                      <h5>Horizontal Slider</h5>

                      <div id="master4" className="slider-yellow"></div>
                      <div id="master1" className="slider-red"></div>
                      <div id="master3" className="slider-green"></div>
                      <div id="master5" className="slider-orange"></div>
                      <div id="master2" className="slider-blue"></div>
                      <div id="master6" className="slider-violet"></div>

                      <hr />

                      <h5>Progressbar</h5>

                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-info"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                      <hr />

                      <h5>Progressbar Animated</h5>

                      <div className="progress progress-animated progress-striped active">
                        <div
                          className="progress-bar progress-bar-warning"
                          data-percentage="100"
                        >
                          <span className="sr-only">100% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-animated progress-striped active">
                        <div
                          className="progress-bar progress-bar-info"
                          data-percentage="100"
                        >
                          <span className="sr-only">100% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-animated progress-striped active">
                        <div
                          className="progress-bar progress-bar-danger"
                          data-percentage="100"
                        >
                          <span className="sr-only">100% Complete</span>
                        </div>
                      </div>
                      <div className="progress progress-animated progress-striped active">
                        <div
                          className="progress-bar progress-bar-success"
                          data-percentage="100"
                        >
                          <span className="sr-only">100% Complete</span>
                        </div>
                      </div>

                      <hr />

                      <h5>Vertical Slider</h5>

                      <div id="eq">
                        <span className="slider-red">88</span>
                        <span className="slider-blue">77</span>
                        <span className="slider-green">55</span>
                        <span className="slider-yellow">33</span>
                        <span className="slider-orange">40</span>
                        <span className="slider-violet">45</span>
                        <div className="clearfix"></div>
                      </div>

                      <hr />

                      <h5>Star Rating</h5>

                      <div
                        className="rateit"
                        data-rateit-resetable="false"
                      ></div>
                      <hr />

                      <h5>Notification</h5>

                      <a href="#" className="btn notify btn-default btn-sm">
                        Notification
                      </a>
                      <a
                        href="#"
                        className="btn notify-sticky btn-default btn-sm"
                      >
                        Sticky Notification
                      </a>
                      <a
                        href="#"
                        className="btn notify-without-image btn-default btn-sm"
                      >
                        Notification - Without Image
                      </a>
                      <a
                        href="#"
                        className="btn notify-remove btn-default btn-sm"
                      >
                        Remove
                      </a>

                      <hr />

                      <h5>Tabs</h5>
                      <ul id="myTab" className="nav nav-tabs">
                        <li className="active">
                          <a href="#home" data-toggle="tab">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#profile" data-toggle="tab">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a href="#cont" data-toggle="tab">
                            Content
                          </a>
                        </li>
                      </ul>
                      <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade in active" id="home">
                          <p>
                            Raw denim you probably haven't heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan american apparel, butcher
                            voluptate nisi qui.
                          </p>
                        </div>
                        <div className="tab-pane fade" id="profile">
                          <p>
                            Food truck fixie locavore, accusamus mcsweeney's
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit, sustainable jean shorts
                            beard ut DIY ethical culpa terry richardson
                            biodiesel. Art party scenester stumptown, tumblr
                            butcher vero sint qui sapiente accusamus tattooed
                            echo park.
                          </p>
                        </div>
                        <div className="tab-pane fade" id="cont">
                          <p>
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney's organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven't heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </p>
                        </div>
                      </div>
                      <hr />

                      <h5>Datepicker</h5>
                      <div id="datetimepicker1" className="input-append">
                        <input
                          data-format="yyyy-MM-dd"
                          className="picker"
                          type="text"
                        />
                        <span className="add-on">
                          &nbsp;<i data-date-icon="fa fa-calendar"></i>
                        </span>
                      </div>

                      <hr />

                      <h5>Timepicker</h5>
                      <div id="datetimepicker2" className="input-append">
                        <input
                          data-format="hh:mm:ss"
                          className="picker"
                          type="text"
                        />
                        <span className="add-on">
                          &nbsp;<i data-time-icon="fa fa-clock-o"></i>
                        </span>
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
      {/* <!--/ Mainbar ends -->	  */}
    </>
  );
};

export default UiElements;

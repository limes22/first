import React from "react";
import "../../../css/bootstrap.min.css";
import "../../../css/jquery-ui.css";
import "../../../css/font-awesome.min.css";
import "../../../css/style.css";
import "../../../css/widgets.css";

const Forms = () => {
  return (
    <>
      <div className="mainbar">
        {/* <!-- Page heading --> */}
        <div className="page-head">
          {/* <!-- Page heading --> */}
          <h2 className="pull-left">
            Forms
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
              Forms
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!--/ Page heading ends --> */}
        {/* <!-- Matter --> */}
        <div className="matter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="widget wgreen">
                  <div className="widget-head">
                    <div className="pull-left">Forms</div>
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
                      <h6>Input Boxs</h6>
                      <hr />
                      {/* <!-- Form starts.  --> */}
                      <form className="form-horizontal" role="form">
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Input Box
                          </label>
                          <div className="col-md-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Input Box"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Password
                          </label>
                          <div className="col-md-8">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password Box"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Textarea
                          </label>
                          <div className="col-md-8">
                            <textarea
                              className="form-control"
                              rows={3}
                              placeholder="Textarea"
                            ></textarea>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Checkbox
                          </label>
                          <div className="col-md-8">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                id="inlineCheckbox1"
                                value="option1"
                              />{" "}
                              1
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="option2"
                              />{" "}
                              2
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                id="inlineCheckbox3"
                                value="option3"
                              />{" "}
                              3
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            RadioBox
                          </label>
                          <div className="col-md-8">
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="optionsRadios"
                                  id="optionsRadios1"
                                  value="option1"
                                  checked
                                />
                                Option one is this and that&mdash;be sure to
                                include why it's great
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="optionsRadios"
                                  id="optionsRadios2"
                                  value="option2"
                                />
                                Option two can be something else and selecting
                                it will deselect option one
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Select Box
                          </label>
                          <div className="col-md-8">
                            <select className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Select Box
                          </label>
                          <div className="col-md-8">
                            <select multiple className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-offset-2 col-md-8">
                            <button type="button" className="btn btn-default">
                              Default
                            </button>
                            <button type="button" className="btn btn-primary">
                              Primary
                            </button>
                            <button type="button" className="btn btn-success">
                              Success
                            </button>
                            <button type="button" className="btn btn-info">
                              Info
                            </button>
                            <button type="button" className="btn btn-warning">
                              Warning
                            </button>
                            <button type="button" className="btn btn-danger">
                              Danger
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ Matter ends --> */}
      </div>
      {/* <!--/ Mainbar ends -->	 */}
    </>
  );
};

export default Forms;

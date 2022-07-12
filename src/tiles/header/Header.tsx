import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/jquery-ui.css";
import "../../css/font-awesome.min.css";
import "../../css/style.css";
import "../../css/widgets.css";

const Header = () => {
    return (
        <>
	  <div
          className="navbar navbar-inverse navbar-fixed-top bs-docs-nav"
          role="banner"
        >
          <div className="container">
            {/* <!-- Menu button for smallar screens --> */}
            <div className="navbar-header">
              <button
                className="navbar-toggle"
                type="button"
                data-toggle="collapse"
                data-target=".bs-navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="index.html" className="navbar-brand">
                Metro <span className="bold">King</span>
              </a>
            </div>
            {/* <!-- Site name for smallar screens --> */}
            {/* <!-- Navigation starts --> */}
            <nav
              className="collapse navbar-collapse bs-navbar-collapse"
              role="navigation"
            >
              {/* <!-- Links --> */}
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                    href="#"
                  >
                    <img
                      src="img/user.jpg"
                      alt=""
                      className="nav-user-pic img-responsive"
                    />{" "}
                    Admin <b className="caret"></b>
                  </a>
                  {/* <!-- Dropdown menu --> */}
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-user"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs"></i> Settings
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i className="fa fa-power-off"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <!-- Notifications --> */}
              <ul className="nav navbar-nav navbar-right">
                {/* <!-- Comment button with number of latest comments count --> */}
                <li className="dropdown dropdown-big">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-comments"></i> Chats{" "}
                    <span className="badge badge-info">6</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      {/* <!-- Heading - h5 --> */}
                      <h5>
                        <i className="fa fa-comments"></i> Chats
                      </h5>
                      {/* <!-- Use hr tag to add border --> */}
                      <hr />
                    </li>
                    <li>
                      {/* <!-- List item heading h6 --> */}
                      <a href="#">Hi :)</a>{" "}
                      <span className="label label-warning pull-right">
                        10:42
                      </span>
                      <div className="clearfix"></div>
                      <hr />
                    </li>
                    <li>
                      <a href="#">How are you?</a>{" "}
                      <span className="label label-warning pull-right">
                        20:42
                      </span>
                      <div className="clearfix"></div>
                      <hr />
                    </li>
                    <li>
                      <a href="#">What are you doing?</a>{" "}
                      <span className="label label-warning pull-right">
                        14:42
                      </span>
                      <div className="clearfix"></div>
                      <hr />
                    </li>
                    <li>
                      <div className="drop-foot">
                        <a href="#">View All</a>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* <!-- Message button with number of latest messages count--> */}
                <li className="dropdown dropdown-big">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-envelope-o"></i> Inbox{" "}
                    <span className="badge badge-important">6</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      {/* <!-- Heading - h5 --> */}
                      <h5>
                        <i className="fa fa-envelope-o"></i> Messages
                      </h5>
                      {/* <!-- Use hr tag to add border --> */}
                      <hr />
                    </li>
                    <li>
                      {/* <!-- List item heading h6 --> */}
                      <a href="#">Hello how are you?</a>
                      {/* <!-- List item para --> */}
                      <p>Quisque eu consectetur erat eget semper...</p>
                      <hr />
                    </li>
                    <li>
                      <a href="#">Today is wonderful?</a>
                      <p>Quisque eu consectetur erat eget semper...</p>
                      <hr />
                    </li>
                    <li>
                      <div className="drop-foot">
                        <a href="#">View All</a>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* <!-- Members button with number of latest members count --> */}
                <li className="dropdown dropdown-big">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-user"></i> Users{" "}
                    <span className="badge badge-success">6</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      {/* <!-- Heading - h5 --> */}
                      <h5>
                        <i className="fa fa-user"></i> Users
                      </h5>
                      {/* <!-- Use hr tag to add border --> */}
                      <hr />
                    </li>
                    <li>
                      {/* <!-- List item heading h6--> */}
                      <a href="#">Ravi Kumar</a>{" "}
                      <span className="label label-warning pull-right">
                        Free
                      </span>
                      <div className="clearfix"></div>
                      <hr />
                    </li>
                    <li>
                      <a href="#">Balaji</a>{" "}
                      <span className="label label-important pull-right">
                        Premium
                      </span>
                      <div className="clearfix"></div>
                      <hr />
                    </li>
                    <li>
                      <a href="#">Kumarasamy</a>{" "}
                      <span className="label label-warning pull-right">
                        Free
                      </span>
                      <div className="clearfix"></div>
                      <hr />
                    </li>
                    <li>
                      <div className="drop-foot">
                        <a href="#">View All</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- Main content starts --> */}
        </>
    );
};

export default Header;
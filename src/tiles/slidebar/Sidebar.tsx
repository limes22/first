import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/jquery-ui.css";
import "../../css/font-awesome.min.css";
import "../../css/style.css";
import "../../css/widgets.css";

const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar">
        <div className="sidebar-dropdown">
          <a href="#">Navigation</a>
        </div>
        <div className="sidebar-inner">
          {/* <!-- Search form --> */}
          <div className="sidebar-widget">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </form>
          </div>
          {/* <!--- Sidebar navigation -->
					<!-- If the main navigation has sub navigation, then add the class "has_submenu" to "li" of main navigation. --> */}
          <ul className="navi">
            {/* <!-- Use the class nred, ngreen, nblue, nlightblue, nviolet or norange to add background color. You need to use this in <li> tag. --> */}

            <li className="nred current">
              <a href="/">
                <i className="fa fa-desktop"></i> Dashboard
              </a>
            </li>
            {/* <!-- Menu with sub menu --> */}
            <li className="has_submenu nlightblue">
              <a href="#">
                {/* <!-- Menu name with icon --> */}
                <i className="fa fa-th"></i> Widgets
                {/* <!-- Icon for dropdown --> */}
                <span className="pull-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
              <ul>
                <li>
                  <a href="widgets1.html">Widgets #1</a>
                </li>
                <li>
                  <a href="widgets2.html">Widgets #2</a>
                </li>
              </ul>
            </li>
            <li className="ngreen">
              <a href="/Charts">
                <i className="fa fa-bar-chart-o"></i> Charts
              </a>
            </li>
            <li className="norange">
              <a href="/UiElement">
                <i className="fa fa-sitemap"></i> UI Elements
              </a>
            </li>
            <li className="has_submenu nviolet">
              <a href="#">
                <i className="fa fa-file-o"></i> Pages #1
                <span className="pull-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
              <ul>
                <li>
                  <a href="calendar.html">Calendar</a>
                </li>
                <li>
                  <a href="post.html">Make Post</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
                <li>
                  <a href="statement.html">Statement</a>
                </li>
                <li>
                  <a href="error-log.html">Error Log</a>
                </li>
                <li>
                  <a href="support.html">Support</a>
                </li>
              </ul>
            </li>
            <li className="has_submenu nblue">
              <a href="#">
                <i className="fa fa-file-o"></i> Pages #2
                <span className="pull-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
              <ul>
                <li>
                  <a href="error.html">Error</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="grid.html">Grid</a>
                </li>
                <li>
                  <a href="invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="media.html">Media</a>
                </li>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
              </ul>
            </li>
            <li className="nred">
              <a href="/Forms">
                <i className="fa fa-list"></i> Forms
              </a>
            </li>
            <li className="nlightblue">
              <a href="tables.html">
                <i className="fa fa-table"></i> Tables
              </a>
            </li>
          </ul>
          {/* <!--/ Sidebar navigation --> */}

          {/* <!-- Date --> */}
          <div className="sidebar-widget">
            <div id="todaydate"></div>
          </div>
        </div>
      </div>
      {/* <!-- Sidebar ends --> */}
    </>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import location from '../images/icon04.png';
import icon03 from '../images/icon03.png';
import icon02 from '../images/icon02.jpg';
import logo from '../images/shop-logo.png';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="wrapper">
      <header>
        <div className="two_in_one">
          <div className="top_head">
            <div className="container">
              <div className="row">
                <div className="head_contact">
                  <ul>
                    <li>
                      <img src={location} alt="" /> Akshya Nagar 1st Block 1st
                      Cross, Rammurthy nagar, Bangalore-560016
                    </li>
                  </ul>
                </div>
                <div className="head_log_area ml-auto">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={icon03} alt="" />
                        abcdejs.mng@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:7797813261">
                        <img src={icon02} alt="" /> +91 779000006
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="middle_head">
            <div className="container">
              <div className="row res_padd">
                <span className="logo">
                  <img src={logo} alt="" />
                </span>
                <div className="right_search ml-auto">
                  <div className="left_search">
                    <Link to="/search">
                      <button type="submit" value="" className="search_submit">
                        Search for More Products
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="for_all_cat_sub_cat">
            <div className="menu_area">
              <div className="container">
                <div className="row res_padd relet">
                  {/* <!--CATEGORY MENU--> */}
                  <div className="adjust_rm01">
                    <div className="off_canvas_animate slide off_canvas_container left_menu_1">
                      <div className="off_canvas_animate slide off_canvas_top_menu">
                        <div className="off_canvas_toggles">
                          <span className="nav_prev_btn">
                            <i className="icon-left"></i>Back
                          </span>
                          <span className="nav_close_btn">
                            <i className="icon-cancel"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <nav className="navbar navbar-expand-md navbar-light">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul
                        className="navbar-nav mr-auto"
                        style={{
                          display: 'flex',
                        }}
                      >
                        <div style={{ display: 'flex' }}>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              About Us
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              B2B Information
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              FAQ
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Contact Us
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Enquiry Us
                            </a>
                          </li>
                        </div>
                        <div style={{ marginLeft: '120px' }}>
                          {' '}
                          <li className="nav-item">
                            <a className="nav-link" onClick={logout}>
                              LogOut
                              <AiOutlineLogout
                                style={{ fontSize: '12px', paddingLeft: '2px' }}
                              />
                            </a>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import datchProfile from '../images/dachprofi.jpg';
import star1 from '../images/star1.png';
import star2 from '../images/star2.png';
import dashico1 from '../images/dashico1.png';
import dashico2 from '../images/dashico2.png';
import dashico3 from '../images/dashico3.png';
import dashico10 from '../images/dashico10.png';
import dashico4 from '../images/dashico4.png';
import dashico7 from '../images/dashico7.png';
import dashico8 from '../images/dashico8.png';
import dashico9 from '../images/dashico9.png';
import uploadimg from '../images/uplodimg.jpg';
import clickhe from '../images/clickhe.png';

// toast.configure();

const EditProfile = () => {
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        ' https://phpwebdevelopmentservices.com/project-react-backend/api/edit-profile',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success('User successfully registered', {
          position: toast.POSITION.TOP_CENTER,
        });

        navigate('/');
      } else {
        toast.error('Registration failed. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setEmail('');

  };
  return (
    <div>
      <section className="wrapper">
        <div className="search_main_section">
          <div className="container">
            <div className="mainDasbordInr">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 pl-0">
                  <div className="dasbordLeftsec">
                    <a
                      href="#url"
                      className="showmeu"
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      <i className="fa fa-bars"></i>Show Menus
                    </a>
                    <div className="dasbordLeft">
                      <div className="profibx">
                        <em>
                          <img src={datchProfile} alt="" />
                        </em>
                        <strong>Rabin Mnna</strong>
                        <ul>
                          <li>
                            <a href="#">
                              <img src={star1} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src={star1} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src={star1} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src={star1} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src={star2} alt="" />
                            </a>
                          </li>
                          <li>
                            <span>(410)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="dasbordLeftlink">
                        <ul>
                          <li>
                            <a href="#">
                              <span>
                                <img src={dashico1} alt="" className="dashico1" />
                              </span>
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="#" className="activ">
                              <span>
                                <img src={dashico2} alt="" className="dashico1" />
                              </span>
                              Edit Profile
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img src={dashico3} alt="" className="dashico1" />
                              </span>
                              My Order
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img src={dashico10} alt="" className="dashico1" />
                              </span>
                              My Favorite
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img src={dashico4} alt="" className="dashico1" />
                              </span>
                              Reviews
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span>
                                <img src={dashico7} alt="" className="dashico1" />
                              </span>
                              Messages<em>10</em>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img src={dashico8} alt="" className="dashico1" />
                              </span>
                              Notifications
                              <em>14</em>
                            </a>
                          </li>
                          <li>
                            <a href="login.html">
                              <span>
                                <img src={dashico9} alt="" className="dashico1" />
                              </span>
                              Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 pr-0">
                  <div className="dasbordRightlink">
                    <h1>Edit Profile</h1>
                    <div className="dasbordRightBody">
                      <div className="editProformBx">
                        <form
                          action="edit-profile-service-offered.html"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="editProformir">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>Name</label>
                                  <input
                                    type="text"
                                    placeholder="Enter here"
                                    name="name"
                                    required
                                    // {...register({ required: true })}
                                  />
                                  {/* {errors.name && (
                                    <span>This field is required</span>
                                  )}{' '} */}
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    placeholder="Enter here"
                                    // value={email}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>Phone</label>
                                  <input type="text" placeholder="Enter here" />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="iputBx">
                                  <label>About me</label>
                                  <textarea placeholder="Enter your description here..."></textarea>
                                </div>
                              </div>

                              <div className="col-md-5 col-sm-6">
                                <div className="iputBx">
                                  <label>Date of Birth</label>
                                  <input
                                    type="text"
                                    className="datepicker"
                                    placeholder="Enter here"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4 col-sm-6">
                                <div className="genfil">
                                  <span>Gender</span>
                                  <ul>
                                    <li>
                                      <input
                                        type="radio"
                                        id="radio1"
                                        name="radios"
                                        value="all"
                                        checked
                                      />
                                      <label for="radio1">Male</label>
                                    </li>
                                    <li>
                                      <input
                                        type="radio"
                                        id="radio2"
                                        name="radios"
                                        value="all"
                                      />
                                      <label for="radio2">Female</label>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-sm-12">
                                <div className="form_group edt_checkk">
                                  <label className="search_label">Travel</label>
                                  <ul className="c_ul">
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Bus
                                        <input
                                          type="checkbox"
                                          checked=""
                                          name="text"
                                        />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Car
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Track
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Walk
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Scooter
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-sm-12">
                                <div className="form_fild_area_m frm_grp arro">
                                  <label>Language </label>
                                  <select
                                    data-placeholder="Select"
                                    className="chosen-select"
                                    multiple
                                    tabindex="4"
                                  >
                                    <option value=""></option>
                                    <option value="">
                                      Htmuyyiyyuyu uyytuyl
                                    </option>
                                    <option value="">
                                      Htmuyyiyyuyu uyytuyl
                                    </option>
                                    <option value="">
                                      Htmuyyiyyuyu uyytuyl
                                    </option>
                                    <option value="">
                                      Htmuyyiyyuyu uyytuyl
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-sm-12">
                                <div className="uplodimg">
                                  <span>Profile Image</span>
                                  <div className="uplodimgfil">
                                    <input
                                      type="file"
                                      name="file-1[]"
                                      id="file-1"
                                      className="inputfile inputfile-1"
                                      data-multiple-caption="{count} files selected"
                                      multiple
                                    />
                                    <label for="file-1">
                                      Click here to Upload Profile Image
                                      <img src={clickhe} alt="" />
                                    </label>
                                  </div>
                                  <div className="uplodimgfilimg">
                                    <em>
                                      <img src={uploadimg} alt="" />
                                    </em>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="locatioSec">
                              <h3>Location</h3>
                              <div className="row">
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>Country</label>
                                    <select>
                                      <option>Select</option>
                                      <option>Select1</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>State</label>
                                    <input
                                      type="text"
                                      placeholder="Enter here"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                  <div className="iputBx">
                                    <label>City</label>
                                    <input
                                      type="text"
                                      placeholder="Enter your full address"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="locatioSec">
                              <h3>Change password</h3>
                              <div className="row">
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>Current password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>New password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                  <div className="iputBx">
                                    <label>Confirm password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="footdashSec">
                              <input
                                type="submit"
                                value="Save all changes"
                                className="subbtn"
                              />
                            </div>
                          </div>
                        </form>
                        {/* <ToastContainer/> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;

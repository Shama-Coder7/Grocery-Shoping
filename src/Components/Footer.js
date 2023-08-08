import React from 'react';
import logo1 from '../images/logo1.png';
import icon32 from '../images/icon32.png';
import icon33 from '../images/icon33.png';
import icon34 from '../images/icon34.png';
import icon35 from '../images/icon35.png';
import icon23 from '../images/icon23.png';
import icon25 from '../images/icon25.png';

const Footer = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <footer className="fotter_area">
        <div className="container">
          <div className="row res_padd">
            <div className="footer_lft">
              <a href="#" onClick={handleLinkClick}>
                <img src={logo1} alt="" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                egestas sem tellus, ac consectetur mi gravida nunc sit amet ante
                vitae ante facilisis
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                egestas sem tellus, ac consectetur mi
              </p>
              <a href="#" onClick={handleLinkClick} className="moree">
                Read more <img src={icon32} alt="" />
              </a>
            </div>

            <div className="footer_rght">
              <div className="foot_01">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      About Bazer Maynaguri
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="foot_02">
                <ul>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Enquiry Us
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      B2B Information
                    </a>
                  </li>
                </ul>
              </div>

              <div className="foot_03 xxmt01">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <span>
                      <img src={icon33} alt="" />
                    </span>
                    <p>
                      Akshya Nagar 1st Block 1st Cross, <br />
                      Rammurthy nagar, <br />
                      Bangalore-560016 <br />
                    </p>
                  </li>
                  <li className="no1">
                    <a href="#" onClick={handleLinkClick}>
                      <span>
                        <img src={icon34} alt="" />
                      </span>
                      <p>+91 779000016</p>
                    </a>
                  </li>
                  <li className="no2">
                    <a href="#" onClick={handleLinkClick}>
                      <span>
                        <img src={icon35} alt="" />
                      </span>
                      <p>abcdejs.mng@gmail.com</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="popular_catt">
                <h5>Popular Categories</h5>
                <ul>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Vegetable
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Fruits
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Dairy products
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Organic Products
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLinkClick}>
                      Grocery Items
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy_fot">
          <div className="container">
            <div className="row res_padd">
              <p>
                &copy; Copyright 2020 bazermaynaguri.com | All Rights Reserved.
              </p>
              <ul>
                <li>Follow us on :</li>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    <img src={icon23} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    <img src={icon25} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

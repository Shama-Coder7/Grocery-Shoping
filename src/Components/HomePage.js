import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import icon05 from '../images/icon05.jpg';
import icon12 from '../images/icon12.png';
import icon11 from '../images/icon11.png';
import icon10 from '../images/icon10.png';
import icon06 from '../images/icon06.JPG';
import curve from '../images/cruve.png';
import icon07 from '../images/icon07.png';
import icon08 from '../images/icon08.jpg';
import icon33 from '../images/icon33.jpg';
import icon34 from '../images/icon34.jpg';
import icon35 from '../images/icon35.jpg';
import icon36 from '../images/icon36.jpg';
import icon15 from '../images/icon15.jpg';
import icon22 from '../images/icon22.jpg';
import icon21 from '../images/icon21.jpg';
import icon20 from '../images/icon20.png';
import icon18 from '../images/icon18.png';
import icon17 from '../images/icon17.jpg';
import icon16 from '../images/icon16.JPG';
import icon19 from '../images/icon19.png';
import icon26 from '../images/icon26.jpg';
import icon27 from '../images/icon27.jpg';
import icon28 from '../images/icon28.jpg';
import icon29 from '../images/icon29.png';
import icon30 from '../images/icon30.jpg';

const HomePage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  useEffect(() => {
    const options = {
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    };
  }, []);
  return (
    <div className="wrapper">
      {/* <!--banner--> */}
      <section className="banner">
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <div className="container">
            <div className="row res_padd">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
            </div>
          </div>

          {/* <!-- The slideshow --> */}
          {/* <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} alt="" />
              <div className="row container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={banner2} alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Simply Dummy Caption Here</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={banner3} alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <section className="banner">
            <Slider {...carouselSettings}>
              <div className="carousel-item active">
                <img src={banner1} alt="" />
                <div className="container">
                  <div className="row res_padd">
                    <div className="sliderr_ttxt">
                      <div className="carousel-caption">
                        <h3>Quality Assurance</h3>
                        <p>Free weighting Machine for our members.</p>
                        <a href="#">Call For Enquiry</a>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </div>
              <div className="carousel-item">
                <img src={banner2} alt="" />
                <div className="container">
                  <div className="row res_padd">
                    <div className="sliderr_ttxt">
                      <div className="carousel-caption">
                        <h3>Simply Dummy Caption Here</h3>
                        <p>Free weighting Machine for our members.</p>
                        <a href="#">Call For Enquiry</a>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </div>
              <div className="carousel-item">
                <img src={banner3} alt="" />
                <div className="container">
                  <div className="row res_padd">
                    <div className="sliderr_ttxt">
                      <div className="carousel-caption">
                        <h3>Quality Assurance</h3>
                        <p>Free weighting Machine for our members.</p>
                        <a href="#">Call For Enquiry</a>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </div>
            </Slider>
          </section>
        </div>
      </section>

      {/* <!--ABOUT--> */}
      <div className="about_us_area">
        <div className="container">
          <div className="row res_padd">
            <h1>Welcom To BazarMoynaguri</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla
              scelerisque erat in nam at efficitur tortor, vitae porttitor mi.
              Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit
              amet velit nec leo imperdiet.
            </h2>
            <img src={icon05} alt="" />

            <div className="linee"></div>

            <div className="aboput_boxx line_left">
              <img src={icon12} alt="" />
              <h3>Best Quality Product</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="aboput_boxx">
              <img src={icon11} alt="" />
              <h3>Free Shipping</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="aboput_boxx border_none line_right">
              <img src={icon10} alt="" />
              <h3>On Time Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <a href="#">Quality product at your door step</a>
          </div>
        </div>
      </div>
      {/* <!--ABOUT--> */}

      {/* <!--slider--> */}
      <div className="slider_one_area">
        <div className="container">
          <div className="res_padd">
            {/* <div id="offer" className="owl-carousel testimonial-carousel-main"> */}
            <Slider {...settings}>
              <div className="item">
                <div className="boxx_sg">
                  <img src={icon06} alt="" />
                  <div className="containtt_one">
                    <h1>Simply dummy Offer text here</h1>
                    <h2>100% Organic Vegetable</h2>
                    <span>
                      <img src={curve} alt="" />
                      <a href="#">
                        CALL FOR Enquiry <img src={icon07} alt="" />
                      </a>
                    </span>
                  </div>
                </div>
                <div className="boxx_sg">
                  <img src={icon08} alt="" />
                  <div className="containtt_two">
                    <span>
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="boxx_sg">
                  <img src={icon33} alt="" />
                  <div className="containtt_one">
                    <h1>Simply dummy Offer text here</h1>
                    <h2>100% Organic Vegetable</h2>
                    <span>
                      <img src={curve} alt="" />
                      <a href="#">
                        CALL FOR Enquiry <img src={icon07} alt="" />
                      </a>
                    </span>
                  </div>
                </div>
                <div className="boxx_sg">
                  <img src={icon34} alt="" />
                  <div className="containtt_two">
                    <span>
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="boxx_sg">
                  <img src={icon35} alt="" />
                  <div className="containtt_one">
                    <h1>Simply dummy Offer text here</h1>
                    <h2>100% Organic Vegetable</h2>
                    <span>
                      <img src={curve} alt="" />
                      <a href="#">
                        CALL FOR Enquiry <img src={icon07} alt="" />
                      </a>
                    </span>
                  </div>
                </div>
                <div className="boxx_sg">
                  <img src={icon36} alt="" />
                  <div className="containtt_two">
                    <span>
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* <!--slider END--> */}

      {/* <!--Our Products--> */}
      <div className="our_products" style={{ marginTop: '200px' }}>
        <div className="container">
          <div className="row res_padd2">
            <h1>Our Products</h1>
            <h3>Shoping made easy or some caption text show here</h3>
            <img src={icon05} alt="" />

            <div className="linee"></div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon15} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon22} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon21} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon20} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon18} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon17} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon16} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>

            <div className="product_box">
              <div className="pro_image">
                <a href="#">
                  <img src={icon19} alt="" />
                </a>
                <span className="enq01">
                  <a href="#">Call For Enquiry</a>
                </span>
              </div>
              <div className="pro_desc">
                <a href="#">Product name show here</a>
                <p>Rs.40.00</p>
                <span className="pro_line">
                  <strong></strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Our Products END--> */}

      <div className="small_banner">
        <div className="container">
          <div className="row rellati res_padd">
            <h1>If you have any quary please fell free to contact us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      {/* <!--Latest Products--> */}
      <div className="latest_products">
        <div className="container">
          <div className="row rellati">
            <div className="lp_product"></div>

            <h1>Latest Products</h1>
            <h3>Shoping made easy or some caption text show here</h3>
            <img src={icon05} alt="" />

            <div className="linee"></div>
            {/* <Slider {...settings}> */}

            <div
              id="latest_product_slider"
              className="owl-carousel testimonial-carousel-main rounded_pro"
            >
              <div className="product-latest">
                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon30} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon29} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon28} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon27} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon26} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>
              </div>

              <div className="product-latest">
                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon30} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon29} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon28} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon27} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon26} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>
              </div>
              <div className="product-latest">
                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon30} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon29} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon28} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon27} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item" style={{ marginRight: '10px' }}>
                  <div className="lp_round">
                    <a href="#">
                      <img src={icon26} alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00</p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>
              </div>
            </div>
            {/* </Slider> */}
          </div>
        </div>
      </div>
      {/* <!--Latest Products--> */}
    </div>
  );
};

export default HomePage;

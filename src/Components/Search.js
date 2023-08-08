import React, { useState, useEffect } from 'react';
import icon36 from '../images/icon36.png';
import productList from './ProductList';
import InputSlider from 'react-input-slider';

const Search = () => {
  const containerStyle = {
    left: '0%',
    width: '100%',
  };

  const [sortedProductList, setSortedProductList] = useState(productList);
  const [sortOption, setSortOption] = useState('default');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;

    if (selectedSortOption === 'lowToHigh') {
      const sortedProducts = [...productList].sort((a, b) => a.price - b.price);
      setSortedProductList(sortedProducts);
    } else if (selectedSortOption === 'highToLow') {
      const sortedProducts = [...productList].sort((a, b) => b.price - a.price);
      setSortedProductList(sortedProducts);
    } else {
      setSortedProductList(productList);
    }

    setSortOption(selectedSortOption);
  };

  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    const filteredProducts = productList.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setSortedProductList(filteredProducts);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    const filteredProducts = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
        (selectedCategory === 'All' || product.category === selectedCategory)
    );
    setSortedProductList(filteredProducts);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange({ min: value.x, max: value.xMax });
    const filteredProducts = productList.filter(
      (product) => product.price >= value.x && product.price <= value.xMax
    );
    setSortedProductList(filteredProducts);
  };

  const handleFilterClick = () => {
    let filteredProducts = productList;

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    if (selectedCategory !== 'All') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    setSortedProductList(filteredProducts);
  };

  return (
    <div class="wrapper">
      <div class="search_main_section">
        <div class="container">
          <div class="row res_padd">
            <div class="bread_crumb">
              <a href="#">Home</a>
              <span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </span>
              <a href="#">Vegetables</a>
            </div>

            <div class="mobile_filter">
              <i class="fa fa-filter" aria-hidden="true"></i>
              <p>Show Filter</p>
            </div>

            <div class="laft_search_panel">
              <h3>Filter Options</h3>
              <div class="form_group" style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Keyword"
                  className="search-input"
                  value={searchKeyword}
                  onChange={handleSearch}
                />
                <img src={icon36} className="search_icon" alt="Search" />
              </div>
              <div className="form_group">
                <label className="search_label">Category</label>
                <select
                  className="slectt"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="All">All</option>
                  <option value="Vegetable">Vegetable</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Dairy products">Dairy products</option>
                  <option value="Organic Products">Organic Products</option>
                  <option value="Grocery Items">Grocery Items</option>
                </select>
              </div>
              <div class="form_group">
                <label class="search_label">Sub Category</label>
                <ul class="c_ul">
                  <li>
                    <label class="contect_container_checkBox">
                      Sub Category one
                      <input type="checkbox" checked="checked" name="text" />
                      <span class="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="contect_container_checkBox">
                      Sub Category two
                      <input type="checkbox" checked="checked" name="text" />
                      <span class="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="contect_container_checkBox">
                      Sub Category
                      <input type="checkbox" checked="checked" name="text" />
                      <span class="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="contect_container_checkBox">
                      Sub Categoru name here
                      <input type="checkbox" checked="checked" name="text" />
                      <span class="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="contect_container_checkBox">
                      Sub Category
                      <input type="checkbox" checked="checked" name="text" />
                      <span class="contect_checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="form_group">
                <label className="search_label">Price Range</label>
                <div className="slider_rnge">
                  {/* Use react-input-slider */}
                  <InputSlider
                    axis="x"
                    xstep={1}
                    xmin={0}
                    xmax={100}
                    x={priceRange.min}
                    xMax={priceRange.max}
                    onChange={(value) => handlePriceRangeChange(value)}
                  />
                  <span className="range-text">
                    <input
                      type="text"
                      className="price_numb"
                      readOnly
                      value={`Rs. ${priceRange.min} - Rs. ${priceRange.max}`}
                    />
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="search-submit1"
                onClick={handleFilterClick}
              >
                Filter
              </button>
            </div>

            {/* <!--right--> */}
            <div class="right_search_panel">
              <div class="evnt_shot_by_main">
                <label class="event-sort">
                  Showing 1-20 out of 100 product for Vegetable
                </label>
                <div class="sort-filter">
                  <p>Sort by :</p>
                  <select
                    className="sort-select"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="default">Select</option>
                    <option value="lowToHigh">Price - Low to High</option>
                    <option value="highToLow">Price - High to Low</option>
                  </select>
                </div>
              </div>

              {sortedProductList.map((product, index) => (
                <div className="search_proo" key={index}>
                  <div className="srch_pic_box">
                    <img src={product.image} alt={product.name} />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">{product.name}</a>
                    <p>Rs. {product.price}</p>
                  </div>
                </div>
              ))}

              <div class="w-100"></div>

              <div class="pagination_area">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li class="active">
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">...</a>
                  </li>
                  <li>
                    <a href="#">25</a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

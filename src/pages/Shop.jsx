import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../style/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) => {
    const filtterValue = e.target.value;
    if (filtterValue === "sofa") {
      const filterdProduct = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filterdProduct);
    }
    if (filtterValue === "mobile") {
      const filterdProduct = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filterdProduct);
    }
    if (filtterValue === "chair") {
      const filterdProduct = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filterdProduct);
    }
    if (filtterValue === "watch") {
      const filterdProduct = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filterdProduct);
    }
    if (filtterValue === "wireless") {
      const filterdProduct = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filterdProduct);
    }
  };

  const handleSearch = (e) => {
    const searchterm = e.target.value;
    const searchedProductts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchterm.toLowerCase())
    );
    setProductsData(searchedProductts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget mb-3">
                <select onClick={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>

                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget mp-3">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search..."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className=" text-center">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

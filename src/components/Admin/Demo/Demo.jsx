import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import Orders from "../Orders/Orders";
import Users from "../Users/Users";
import Subcategories from "../Subcategories/Subcategories";

import { DataLink } from "../Navbar/DataLink";

import "./Demo.scss";
function Demo() {
  const [id, setId] = useState(null);
  return (
    <>
      <Header></Header>

      <div className="container-fluid navbar-container">
        <div className="navcontainer">
          <nav className="nav-admin">
            <div className="nav-upper-options">
              {DataLink.map((element, index) => (
                // <div className={element.id == id ? "option1 nav-option" : "option2 nav-option"} onClick={() => setId(element.id)}>
                //   <a class="option-item" href={element.to}>
                //     <i class={element.class}></i>
                //     <h5> {element.name}</h5>
                //   </a>
                // </div>
                <Link
                  className={
                    element.id == id
                      ? "option1 nav-option option-item"
                      : "option2 nav-option option-item"
                  }
                  onClick={() => setId(element.id)}
                  as={Link}
                  to={element.to}
                >
                  <i class={element.class}></i>
                  <h5> {element.name}</h5>
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <Dashboard></Dashboard>

        {/* <Routes>
          <Route exact path="/admin" element={<Dashboard></Dashboard>} />
          <Route
            exact
            path="/admin/categories"
            element={<Categories></Categories>}
          />
          <Route
            exact
            path="/admin/subcategories"
            element={<Subcategories></Subcategories>}
          />
          <Route exact path="/admin/products" element={<Products></Products>} />
          <Route exact path="/admin/orders" element={<Orders></Orders>} />
          <Route exact path="/admin/users" element={<Users></Users>} />
        </Routes> */}
      </div>
    </>
  );
}

export default Demo;

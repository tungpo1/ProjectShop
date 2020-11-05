import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Container/Home";
import Shop from "./Container/Shop";
import Pages from "./Container/Pages";
import Contact from "./Container/Contact";
import Blog from "./Container/Blog";
import Header2 from "./Component/Header2";
import ShopCart from "./Container/ShopCart";
import List from "./Container/ProductList/";
import FooterProduct from "./Component/Footer/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

function App() {

  return (
    <Router className="App">
      <Header2 />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/shop" component={List} />
          <Route path="/shop/:id/" component={Shop} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/cart" component={ShopCart} />
        </Switch>
      </ScrollToTop>
      <FooterProduct />
    </Router>
  );
}

export default App;

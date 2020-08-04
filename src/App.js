import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./pages/members/Login";
import MemberList from "./pages/members/MemberList";
import Profile from "./pages/members/Profile";
import Regist from "./pages/members/Regist";
import Products from "./pages/products/Products";
import ProductsDetail from "./pages/products/ProductsDetail";
import ProductAdd from "./pages/products/ProductAdd";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main} exact={true} />

        <Route exact path="/login" component={Login} />
        <Route exact paht="/memberList" component={MemberList} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/regist" component={Regist} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/product/add" component={ProductAdd} />
        <Route exact path="/products/:idx" component={ProductsDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;

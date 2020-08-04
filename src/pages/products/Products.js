import React from "react";
import { useSelector } from "react-redux";
import TopHeader from "../../components/TopHeader";
import Footer from "../../components/Footer";

const Products = () => {
  const globalProducts = useSelector((state) => state.product.products);

  return (
    <div>
      <TopHeader />
      <h1>상품목록페이지</h1>
      전역 데이터 상품은 {globalProducts.length}개 입니다.
      <Footer />
    </div>
  );
};

export default Products;

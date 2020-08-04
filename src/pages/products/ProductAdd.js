import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { insertProduct } from "../../modules/product";
import { useSelector, useDispatch } from "react-redux"; // useSelect -> 전역데이터 값을 조회 / useDispatch -> 액션실행함수 호출
import TopHeader from "../../components/TopHeader";
import Footer from "../../components/Footer";

const ProductAdd = () => {
  //단일상품 객체에 대한 구조 정의 및 초기값 설정
  const [product, setProduct] = useState({
    idx: 0,
    productName: "",
    productDesc: "",
    productImgUrl: "/img/smaple1.png",
  });

  // 저장된 상품 목록 데이터 구조 정의
  // 해당 페이지 컴포넌트자체에서만 사용하는 데이터 구조(리덕스로 대체 예정)
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const onAddProduct = () => {
    dispatch(insertProduct(product));
  };

  const onProductChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <TopHeader />
      <h1>상품등록페이지</h1>
      <table>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>
              <input
                type="text"
                name="idx"
                value={product.idx}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>상품명</td>
            <td>
              <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>상품설명</td>
            <td>
              <input
                type="text"
                name="productDesc"
                value={product.productDesc}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>상품이미지URL</td>
            <td>
              <input
                type="text"
                name="productImgUrl"
                value={product.productImgUrl}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <button onClick={onAddProduct}>저장</button>
      <Link to="/products">목록</Link>
      <h1>총 {products.length}건이 저장 되었습니다.</h1>
      <Footer />
    </div>
  );
};

export default ProductAdd;

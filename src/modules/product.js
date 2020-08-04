// 1. 액션타입 정의

const PRODUCT_INSERT = "PRODUCT_INSERT";
const PRODUCT_LIST = "PRODUCT_LIST";

// 2. 액션 실행함수 정의

export const insertProduct = (product) => ({
  type: PRODUCT_INSERT,
  product: product, // 화면에서 받은 단일 제품 정보를 product라는 속성 이름으로 전달
});

// 3. 리듀서 함수 정의
// 3-1. 전역 데이터 구조를 정의하고 초기화
const initialState = {
  products: [
    {
      idx: 0,
      productName: "전역상품데이터1",
      productDesc: "설명1",
      productImgUrl: "/img/smaple1.png",
    },
    {
      idx: 0,
      productName: "전역상품데이터2",
      productDesc: "설명2",
      productImgUrl: "/img/smaple1.png",
    },
  ],
};

// 3-2: 액션 타입에 따라 액션생성함수를 통해 전달 된 값으로 전역 데이터 값을 변경 적용 한다
// 리듀서 함수 정의 (첫번째 인자 : 전역 상태값, 두번째 인자 : 액션생성함수에 의해서 전달되는 데이터 값)
function product(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_INSERT:
      return { ...state, products: state.products.concat(action.product) };
    default:
      return state;
  }
}

export default product;

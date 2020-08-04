import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const globalProducts = useSelector((state) => state.product.products);
  const loginUser = useSelector((state) => state.member.loginUser);
  const isLogin = useSelector((state) => state.member.isLogin);
  return (
    <div>
      상단 헤더 공통영역 컴포넌트 <br />총 제품건수는 {globalProducts.length}
      입니다.
      <hr />
      로그인 상태 : {String(isLogin)} <br />
      {loginUser.name} 님이 로그인 하였습니다.
      <br />
      {isLogin == false ? (
        <div>
          Logo | 로그인 | <Link to="/login">회원가입</Link>
        </div>
      ) : (
        <div>Logo | 프로필 | 로그아웃</div>
      )}
    </div>
  );
};

export default TopHeader;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../modules/member";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState();
  const [userPwd, setUserPwd] = useState();

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const onUserPwdChange = (e) => {
    setUserPwd(e.target.value);
  };

  const onLogin = () => {
    dispatch(login(userId, userPwd));
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="userId"
                value={userId}
                onChange={(e) => onUserIdChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                name="userPwd"
                value={userPwd}
                onChange={(e) => onUserPwdChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Link to="/">
                <button onClick={onLogin}>로그인</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Login;

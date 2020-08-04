// 1. 액션타입 정의

const MEMBER_INSERT = "MEMBER_INSERT";
const MEMBER_LOGIN = "MEMBER_LOGIN";

// 2. 액션 실행함수 정의

export const insertProduct = (member) => ({
  type: MEMBER_INSERT,
  member: member,
});

export const login = (memberId, memberPwd) => ({
  type: MEMBER_LOGIN,
  memberId: memberId,
  memberPwd: memberPwd,
});

// 3. 리듀서 함수 정의
// 3-1. 전역 데이터 구조를 정의하고 초기화
const initialState = {
  members: [
    {
      memberId: "test1",
      memberPwd: "test1",
      name: "test1",
      email: "test1@test.com",
    },
    {
      memberId: "test2",
      memberPwd: "test2",
      name: "test2",
      email: "test2@test.com",
    },
  ],
  loginUser: {},
  isLogin: false,
};

// 3-2: 액션 타입에 따라 액션생성함수를 통해 전달 된 값으로 전역 데이터 값을 변경 적용 한다
// 리듀서 함수 정의 (첫번째 인자 : 전역 상태값, 두번째 인자 : 액션생성함수에 의해서 전달되는 데이터 값)
function member(state = initialState, action) {
  switch (action.type) {
    case MEMBER_INSERT:
      return { ...state, member: state.members.concat(action.member) };
    case MEMBER_LOGIN:
      // 입력한 아이디 비번과 동일한 사용자 배열 조회
      const loginMember = state.members.filter(
        (user) =>
          user.memberId == action.memberId && user.memberPwd == action.memberPwd
      );
      if (loginMember.length == 1) {
        console.log("로그인 사용자 : ", loginMember);
        return { ...state, loginUser: loginMember[0], isLogin: true };
      } else {
        return { ...state, loginUser: {}, isLogin: false };
      }

    default:
      return state;
  }
}

export default member;

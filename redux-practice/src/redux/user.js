import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
    name: "user", // 리듀서 이름 지정
    initialState: { value: initialStateValue }, // 데이터 초기값
    reducers: { // 로그인 버튼을 눌렀을 때 이름, 나이, 이메일이 변하도록 - 로그인 함수 생성
        login: (state, action) => { // state : 초기값 value를 가져오는 역할
            state.value = action.payload; //payload : 우리가 바꾸고 싶은 데이터를 원하는 곳에다가 넘겨주는 역할
        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    }
})

export const { login, logout } = userSlice.actions; // login 함수를 action기능이 작동하도록 다른데서 쓸 것이다.

export default userSlice.reducer;

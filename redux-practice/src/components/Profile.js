import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
    // useSelector : 우리가 만든 reducer에 접근할 수 있다.
    // user라고 이름 지은 리듀서에 있는 state에 접근할 것이다. (store의 reducer 이름 사용 (user))
    // value : 우리가 지정해둔 초기값 (initialState)
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);

    return (
        <div style={{ color: themeColor }}>
            <h1> Profile Page </h1>
            <p> Name : {user.name} </p>
            <p> Age : {user.age} </p>
            <p> Email : {user.email} </p>
        </div>
    );
}

export default Profile
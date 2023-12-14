// hook

import { useCallback, useState } from "react";

// 이벤트가 발생할 때, true false로 상태 전환
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState); //initialState - 초기값
  // 다른 컴포넌트와 연결이 되어있고,
  // 콜백함수가 props로 전달되어 실행된다면(특히 이벤트 핸들러로 사용된다면),
  // 렌더링과 연관될 수 있다.
  // -> 이런 경우 useCallback으로 묶어서 사용하는 것이 좋다.
  //    (함수 재정의를 방지해, 불필요한 리렌더링 방지)
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle]; // 상태, 토글함수
};

export default useToggle;

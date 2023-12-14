// 1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링된다.
// 2. 부모 컴포넌트로 부터 받는 prop이 변경될 때 리렌더링된다.
// 3. 부모 컴포넌트의 상태가 변경되면 리렌더링된다.
// React.memo
import { useState } from "react";
import Box from "./components/Box";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Box />
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
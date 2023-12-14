// useCallback
// 함수가 다시 정의되는 것을 막음
import { useCallback, useState } from "react";
import Checkbox from "./components/Checkbox";
function App() {
  const [foodOn, setFoodOn] = useState(false);
  const [clothesOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  // 새로운 메모리에 정의된 함수가 onChange로 넘어가기 때문에,
  // 함수가 재정의되어, 자식 컴포넌트(Checkbox)에 React.memo를 해줘도 리렌더링된다.

  // 이를 막기위해 useCallback(함수 생성,[dependency(의존성 배열)]) 사용
  // dependency(두번째 인자)가 변경되지 않으면 이전에 생성했던 함수(첫번째 인자, 메모리 주소 변경 x) 반환
  const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
  const clothesChange = useCallback((e) => setClothesOn(e.target.checked), []);
  const shelterChange = useCallback((e) => setShelterOn(e.target.checked), []);

  return (
    <div>
      <Checkbox label="Food" on={foodOn} onChange={foodChange} />
      <Checkbox label="Clothes" on={clothesOn} onChange={clothesChange} />
      <Checkbox label="Shelter" on={shelterOn} onChange={shelterChange} />
    </div>
  );
}

export default App;

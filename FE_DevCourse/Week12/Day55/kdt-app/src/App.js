// 사용자 정의 훅
// 기존 훅 조합
// 자주 사용하는 상태로직을 별도의 사용자 정의 훅으로 빼서 사용
// 중복 코드 제거, 편하게 사용
import Checkbox from "./components/Checkbox2";
import useToggle from "./hooks/useToggle";
function App() {
  const [on, toggle] = useToggle();

  console.log(on);

  return (
    <div>
      <Checkbox checked={on} onChange={toggle} />
      {/* <button onClick={toggle}>{on ? "True" : "False"}</button> */}
    </div>
  );
}

export default App;

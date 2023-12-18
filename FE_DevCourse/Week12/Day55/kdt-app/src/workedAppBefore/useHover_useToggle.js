// 사용자 정의 훅
// 기존 훅 조합
// 자주 사용하는 상태로직을 별도의 사용자 정의 훅으로 빼서 사용
// 중복 코드 제거, 편하게 사용
import Box2 from "./components/Box2";
import Checkbox from "./components/Checkbox2";
import useHover from "./hooks/useHover";
import useToggle from "./hooks/useToggle";

function App() {
  // Hook 불러오기
  const [on, toggle] = useToggle();
  const [ref, isHover] = useHover();

  // console.log(on);

  return (
    <div>
      {isHover ? "hover" : "mouseout"}
      <Box2 ref={ref} />
      <Checkbox checked={on} onChange={toggle} />
      {/* <button onClick={toggle}>{on ? "True" : "False"}</button> */}
    </div>
  );
}

export default App;

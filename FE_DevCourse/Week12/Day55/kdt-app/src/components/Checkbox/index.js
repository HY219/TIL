import React from "react";

// 라벨, 체크박스상태, 체크박스클릭시이벤트처리
const Checkbox = React.memo(({ label, on, onChange }) => {
  console.log(label, on);
  return (
    <label>
      {label}
      <input type="checkbox" defaultChecked={on} onChange={onChange}></input>
    </label>
  );
});

export default Checkbox;

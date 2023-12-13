// defaultPage - 시작 페이지 번호
// limit - 몇 개 단위로 자를 것 인지

import { useState } from "react";

// total - 데이터의 총 수
const Pagination = ({ defaultPage, limit, total, onChange }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleChangePage = (newPage) => {
    onChange(newPage);
    setPage(newPage);
  };

  return (
    <div>
      {/* onClick 속성에 함수를 전달할 때, 반드시 함수의 참조를 전달해야한다. - 클릭 시에만 호출되도록!!
          (함수 호출x - <button onClick={handleChangePage(page - 1)}>이전</button> - 렌더링 될 때마다 함수가 호출된다. 클릭하지 않아도 동작해버린다.)
          */}
      <button onClick={() => page !== 0 && handleChangePage(page - 1)}>
        이전
      </button>
      {/* totalPage 길이의 배열을 생성하고, 해당 배열의 각 요소를 인덱스 값으로 채운다 */}
      {Array.from(new Array(totalPage), (_, i) => i)
        .filter((i) => {
          if (page < 3) {
            return i < 5;
          } else if (page > totalPage - 3) {
            return i >= totalPage - 5;
          }
          // 선택된 페이지의 왼쪽&&오른쪽으로 2개씩 페이지 번호 표시
          return i >= page - 2 && i <= page + 2;
        })
        .map((i) => {
          return (
            <button
              key={i}
              onClick={() => handleChangePage(i)}
              style={{ backgroundColor: page === i ? "blue" : undefined }}
            >
              {i + 1}
            </button>
          );
        })}
      <button
        onClick={() => page !== totalPage - 1 && handleChangePage(page + 1)}
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;

// 사용사례 - 페이지네이션
// 데이터를 여러 페이지로 나눠서 일부씩 보여주는 기술
// 한꺼번에 로드x
// ex. 게시물 p.1, p.2, p.3
import Pagination from "./components/Pagination";
import Board2 from "./components/Board2";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = limit * page;
  // const articles = [
  //   { id: 1, title: "one" },
  //   { id: 2, title: "two" },
  // ];
  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번 게시물`,
  }));

  return (
    <div>
      <Pagination
        defaultPage={0}
        limit={limit}
        total={articles.length}
        onChange={setPage}
      />
      <Board2 articles={articles.slice(offset, offset + limit)} />
    </div>
  );
}

export default App;

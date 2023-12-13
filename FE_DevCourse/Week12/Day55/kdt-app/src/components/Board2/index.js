import PropTypes from "prop-types";

const Board2 = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => {
        // map의 콜백함수에서 값을 명시적으로 반환해야한다.
        // but, JSX에서는 명시하지 않아도, 자동 반환됨.
        // return을 써달라고 오류가 난건 eslint 때문.
        return (
          <li key={article.id}>
            {article.id} | {article.title}
          </li>
        );
      })}
    </ul>
  );
};

Board2.propTypes = {
  articles: PropTypes.array,
};
export default Board2;

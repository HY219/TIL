import PropTypes from "prop-types";

const Board = ({ articles }) => {
  return (
    <div>
      <h1>Board</h1>
      <ul>
        {articles.map((article) => (
          <li>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

Board.prototype = {
  articles: PropTypes.array,
};

export default Board;

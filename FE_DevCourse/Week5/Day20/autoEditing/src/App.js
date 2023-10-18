import PostsPage from "./PostsPage.js";

export default function App({ $target }) {
  const postsPage = new PostsPage({ $target });

  postsPage.render();
  //app컴포넌트가 생성이되면, postsPage을 생성하고, 그 후에 render를 호출해서 화면에 그리기
}

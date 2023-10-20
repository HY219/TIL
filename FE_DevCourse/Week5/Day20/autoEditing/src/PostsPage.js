import PostList from "./PostList.js";
import { request } from "./api.js";

//onPostClick은 app까지 올려야돤다. 그래야 app에서 PostEditPage로 보낼 수 있다.
//-> PostsPage의 매계번수로 추가하는 이유
export default function PostsPage({ $target, onPostClick }) {
  const $page = document.createElement("div");

  const postList = new PostList({
    $target: $page,
    initialState: [],
    onPostClick,
  });

  /** app.js(외부)에서 postsPage랜더를 실행하면,
  /*  post를 패치 해올 거고,
  /*  그 이후에 appendChild를 할 것이다.
  */

  const $newPostButton = document.createElement("button");
  $newPostButton.textContent = "New Post";
  $page.appendChild($newPostButton);

  const fetchPosts = async () => {
    const posts = await request("/posts");

    postList.setState(posts);
  };

  //page를 랜더링하는 시점,
  //app.js에서 이 페이지를 랜더링하겠다라고 경정이 될 때, target을 append할 것이다.
  this.render = async () => {
    //생성이 되자마자 랜더링 되면 안되므로
    await fetchPosts();
    $target.appendChild($page);
  };
}

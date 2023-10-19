import PostsPage from "./PostsPage.js";
import PostEditPage from "./PostEditPage.js";

// url 규칙
// 루트 : postsPage 그리기

// /posts/{id} - id에 해당하는 post 생성
// /posts/new - 새 post 생성
export default function App({ $target }) {
  //라우팅 처리하는 것이 필요함.
  const postsPage = new PostsPage({ $target });
  const postEditPage = new PostEditPage({
    $target,
    initialState: { postId: "new" }, //기본: new
  });

  this.route = () => {
    //location에서 pathnmae불러오기 //main에서 App컴포넌트를 불러야 o
    const { pathname } = window.location;
    console.log(pathname);

    //pathname에 따라서 어떤 컴포넌트를 렌더링할 것이냐는 로직을 넣을 것이다.
    //routing을 한다.
    //postId를 불러올 것인지, new할 것인지 하는 처리를 한다.

    //if 빈 페이지 일 경우, postsPage를 불러온다.
    if (pathname === "/") {
      postsPage.render();
    }
    //else if 첫 번째 url이 /posts/인 경우,
    //postId를 구해, 해당하는 postEditPage를 불러온다.
    else if (pathname.indexOf("/posts/") === 0) {
      //쪼개서 postId 구하기
      //배열과 공란은 [/,posts,/postId]를 의미한다.
      const [, , postId] = pathname.split("/");
      console.log(postId);
      postEditPage.setState({ postId });
    }
  };

  this.route();
  //app컴포넌트가 생성이되면, postsPage을 생성하고, 그 후에 render를 호출해서 화면에 그리기
}

import { request } from "./api.js";
import Editor from "./Editor.js";
import { getItem, setItem, removeItem } from "./storage.js";
import { push } from "./router.js";

// editor가 어떠한 게시글을 편집하는 것인지에 대한 값이 있어야한다.
// post id를 처음에 받을 것이다.
//처음에 들어간 page가 PostEditPage일 경우, 바로 편집이 가능하도록 해줘야하기 때문에, initialState를 넣는다.
export default function PostEditPage({ $target, initialState }) {
  const $page = document.createElement("div");

  this.state = initialState;

  //"temp-post"가 존재하면, 그것으로 초기값을 세팅하는 것이 필요할 것이다.
  //localStorage에 저장되어있는 값이 있다면

  // page1를 수정하고, page2에 들어왔는데 page1의 내용이 들어와져있는 경우가 발생할 수 있다.
  // -> key를 조합해서 쓴느 것이 필요하다.
  //const TEMP_POST_SAVE_KEY = `temp-post-${this.state.postId}`; //let postLocalSaveKey
  let postLocalSaveKey = `temp-post-${this.state.postId}`;

  //getItem(불러올 값, 불러올 값이 없을 경우 세팅할 값)
  const post = getItem(postLocalSaveKey, {
    title: "",
    content: "",
  });

  let timer = null;

  const editor = new Editor({
    $target: $page,
    initialState: post,
    //현재 편집중인 경우에 대한 callback
    onEditing: (post) => {
      //입력간격이 1초가 넘었을 때, timer가 작동하도록!
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        setItem(postLocalSaveKey, {
          ...post,
          tempSaveDate: new Date(),
        });

        // postId가 new일 때
        const isNew = this.state.postId === "new";
        if (isNew) {
          const createdPost = await request("/posts", {
            method: "POST",
            body: JSON.stringify(post), //this.state에는 postId바께 없으므로, 변경해줘야함.
          });
          // {postId}가 변경이 되도록 한다. ex. new -> 2356
          // 뒤로가기 했을 때 new로 가지 않도록
          history.replaceState(null, null, `/posts/${createdPost.id}`);
          removeItem(postLocalSaveKey);
        } else {
          // update
          // new에서 작성 후, 새로고침 했을 때 confirm이 뜨지 않고, update된 값이 불러와짐
          await request(`/posts/${post.id}`, {
            method: "PUT",
            body: JSON.stringify(post),
          });
          removeItem(postLocalSaveKey);
        }
      }, 1000);
    },
  });

  //setState가 일어나면, fetchPost()를하고
  //fetchPost에서 render를 호출하도록 함
  this.setState = async (nextState) => {
    // console.log(this.state.postId, nextState.postId);
    if (this.state.postId !== nextState.postId) {
      postLocalSaveKey = `temp-post-${nextState.postId}`;
      this.state = nextState;
      await fetchPost();
      return;
    }

    this.state = nextState;
    this.render();

    // console.log(this.state.post);
    //여기서 날려먹는 문제..
    //default 값을 지정해줘서 해결
    editor.setState(
      this.state.post || {
        title: "",
        content: "",
      }
    );
  };

  this.render = () => {
    $target.appendChild($page);
  };

  //외부에서도 접근할 수 있기 때문에 -> setState에 넣어서 작성할 것임.
  //new가 아닐 경우.
  const fetchPost = async () => {
    const { postId } = this.state;

    //새로 값을 추가하는 경우
    //방어코드로
    if (postId !== "new") {
      const post = await request(`./posts/${postId}`);

      const tempPost = getItem(postLocalSaveKey, {
        title: "",
        content: "",
      });
      console.log(tempPost);

      //tempSaveDate => 최근 수정 시간
      //tempSaveDate가 있는 경우 && tempSaveDate가 post가 업데이트된 시간보다 클 경우
      if (tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
        if (confirm("저장되지 않은 임시 데이터가 있습니다. 불러올까요?")) {
          this.setState({ ...this.state, post: tempPost });
          return;
        }
      }

      this.setState({
        ...this.state,
        post,
      });
    }
  };

  // 글 목록 페이지로 가는 버튼
  const $moveListButton = document.createElement("button");
  $moveListButton.innerText = "목록으로";
  $page.appendChild($moveListButton);

  $moveListButton.addEventListener("click", () => {
    push("/");
  });
}

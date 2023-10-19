import { request } from "./api.js";
import Editor from "./Editor.js";
import { getItem, setItem } from "./storage.js";

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
  const TEMP_POST_SAVE_KEY = `temp-post-${this.state.postId}`;

  //getItem(불러올 값, 불러올 값이 없을 경우 세팅할 값)
  const post = getItem(TEMP_POST_SAVE_KEY, {
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
      timer = setTimeout(() => {
        setItem(TEMP_POST_SAVE_KEY, {
          ...post,
          tempSaveDate: new Date(),
        });
      }, 1000);
    },
  });

  //setState가 일어나면, fetchPost()를하고
  //fetchPost에서 render를 호출하도록 함
  this.setState = async (nextState) => {
    // console.log(this.state.postId, nextState.postId);
    if (this.state.postId !== nextState.postId) {
      this.state = nextState;
      await fetchPost();
      return;
    }

    this.state = nextState;
    this.render();

    // console.log(this.state.post);
    editor.setState(this.state.post);
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

      this.setState({
        ...this.state,
        post,
      });
    }
  };
}

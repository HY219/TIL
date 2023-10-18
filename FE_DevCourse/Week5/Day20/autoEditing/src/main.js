import App from "./App.js";
import Editor from "./Editor.js";
import { getItem, setItem } from "./storage.js";

const $target = document.querySelector("#app");

// new App({ $target });

//"temp-post"가 존재하면, 그것으로 초기값을 세팅하는 것이 필요할 것이다.
//localStorage에 저장되어있는 값이 있다면
const TEMP_POST_SAVE_KEY = "temp-post";

//getItem(불러올 값, 불러올 값이 없을 경우 세팅할 값)
const post = getItem(TEMP_POST_SAVE_KEY, {
  title: "",
  content: "",
});

let timer = null;

new Editor({
  $target,
  initialState: post,
  //현재 편집중인 경우에 대한 callback
  onEditing: (post) => {
    // console.log(post);
    // 중간에 타이핑이 있으면 1초 뒤로 미루기. (1초 다시 재기)
    // 타이핑이 없는 1초 뒤(입력간격이 1초가 넘었을 때)에 timer가 작동하도록!
    if (timer !== null) {
      clearTimeout(timer);
    }
    // setTimeout를 실행하면, 특정한id같은 숫자값이 나온다. 
    // 이 숫자를 지금 timer에 담은 것이다.
    // -> 이 숫자 값을 이용하면 clearTimeout으로 초기화를 할 수 있다.
    timer = setTimeout(() => {
      setItem(TEMP_POST_SAVE_KEY, {
        ...post,
        tempSaveDate: new Date(),
      });
    }, 1000);
  },
});

// import { request } from "./api.js";
// import PostList from "./PostList.js";

// const DUMMY_DATA = [
//   {
//     id: 1,
//     title: "테스트1",
//   },
//   {
//     id: 2,
//     title: "테스트2",
//   },
//   {
//     id: 3,
//     title: "테스트3",
//   },
//   {
//     id: 4,
//     title: "테스트4",
//   },
// ];

// const postList = new PostList({
//   $target,
//   //initialState: DUMMY_DATA,
//   initialState: [],
// });

// const fetchPosts = async () => {
//   const posts = await request("/posts");

//   postList.setState(posts);
// };

// fetchPosts();

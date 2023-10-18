import App from "./App.js";
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

const $target = document.querySelector("#app");

new App({ $target });

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

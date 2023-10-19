import PostEditPage from "./PostEditPage.js";
const $target = document.querySelector("#app");

// new App({ $target });

const postEditPage = new PostEditPage({
  $target,
  initialState: {
    postId: "new",
  },
});

postEditPage.setState({
  postId: 2,
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

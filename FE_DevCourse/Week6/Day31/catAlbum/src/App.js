import { request } from "./api.js";
import Breadcrumb from "./Breadcrumb.js";
import ImageViewer from "./ImageViewer.js";
import Loading from "./Loading.js";
import Nodes from "./Nodes.js";

export default function App({ $target }) {
  this.state = {
    isRoot: true, //root값에 따라서, 뒤로가기를 넣거나 넣지않음.
    isLoading: false,
    nodes: [],
    paths: [], //DIRECTORY를 클릭할 때마다, 해당 경로를 paths에 쌓아준다.
  };

  const loading = new Loading({
    $target,
  })

  const breadcrumb = new Breadcrumb({
    $target,
    initialState: this.state.paths,
  })

  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
      selectedImageUrl: null,
    },
    // DIRECTORY, FILE을 클릭햇을 경우
    onClick: async (node) => {
      if (node.type === "DIRECTORY"){
        await fetchNodes(node.id);

        // paths.push(node);
        this.setState({
          ...this.state,
          paths: [...this.state.paths, node]
        })
      }
      if (node.type === "FILE"){
        this.setState({
          ...this.state,
          selectedImageUrl: `https://kdt-frontend.cat-api.programmers.co.kr/static${node.filePath}` // 이미지 경로
        })
      }
    },
    // 뒤로가기를 클릭 했을 경우
    onPrevClick: async () => {
      // paths.pop()
      const nextPaths = [...this.state.paths]
      nextPaths.pop();
      this.setState({
        ...this.state,
        paths: nextPaths,
      })

      console.log(nextPaths);

      if (nextPaths.length === 0){
        // root 불러오기
        await fetchNodes();
      } else {
        // 이전 id에 해당하는 경로 불러오기
        await fetchNodes(nextPaths[nextPaths.length -1].id) // paths 마지막에 담긴 id = 현재 경로 이전 경로의 id
      }
    }
  });

  const imageViewer = new ImageViewer({ 
    $target, 
    onClose: () => {
      this.setState({
        ...this.state,
        selectedImageUrl: null // 닫는 처리
      })
  } });

  this.setState = (nextState) => {
    this.state = nextState;

    // api로부터 가져온 data 이용
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });

    imageViewer.setState({
      selectedImageUrl: this.state.selectedImageUrl
    })

    loading.setState(this.state.isLoading);

    breadcrumb.setState(this.state.paths);
  };

  // id 파라미터가 있으면, 해당 id에 속한 data를 불러오도록 한다.
  const fetchNodes = async (id) => {
    // data를 불러올 때 (= fetchNodes가 시작할 때)
    this.setState({
      ...this.state,
      isLoading: true,
    })

    const nodes = await request(id ? `/${id}` : "/");

    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true, //id가 있으면 false, 없으면 true
      isLoading: false, // fetchNodes가 끝날 때
    });
  };

  fetchNodes();
}

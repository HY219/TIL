import { request } from "./api.js";
import Nodes from "./Nodes.js";

export default function App({ $target }) {
  this.state = {
    isRoot: true, //root값에 따라서, 뒤로가기를 넣거나 넣지않음.
    nodes: [],
  };

  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: async (node) => {
      if (node.type === "DIRECTORY"){
        await fetchNodes(node.id);
      }
    }, //그냥 클릭 했을 경우 & 뒤로가기를 클릭 했을 경우 (2가지)
  });

  this.setState = (nextState) => {
    this.state = nextState;

    // api로부터 가져온 data 이용
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
  };

  // id 파라미터가 있으면, 해당 id에 속한 data를 불러오도록 한다.
  const fetchNodes = async (id) => {
    const nodes = await request(id ? `/${id}` : "/");

    this.setState({
      nodes,
      isRoot: id ? false : true, //id가 있으면 false, 없으면 true
    });
  };

  fetchNodes();
}

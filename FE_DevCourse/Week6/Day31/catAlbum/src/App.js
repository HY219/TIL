import Nodes from "./Nodes.js";

const DUMMY_DATA = [
  {
    id: "1",
    name: "노란고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
  {
    id: "3",
    name: "까만고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
  {
    id: "10",
    name: "고등어무늬 고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
  {
    id: "13",
    name: "삼색이 고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
  {
    id: "14",
    name: "회색고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
  {
    id: "20",
    name: "하얀고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
];

const DUMMY_DATA_2 = [
  {
    "id": "5",
    "name": "2021/04",
    "type": "DIRECTORY",
    "filePath": null,
    "parent": {
      "id" : "1"
    }
  },
  {
    "id":"19",
    "name": "물 마시는 사진",
    "type": "FILE",
    "filePath": "/images/a2i.jpg",
    "parent": {
      "id": "1"
    }
  }
]

export default function App({ $target }) {
  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: false, //root값에 따라서, 뒤로가기를 넣거나 넣지않음.
      nodes: DUMMY_DATA_2,
    },
    onClick: () => {}, //그냥 클릭 했을 경우 & 뒤로가기를 클릭 했을 경우 (2가지)
  });
}

import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Paragraph from "./components/Paragraph";
import Board from "./components/Board";

function App() {
  const [visible, setVisible] = useState(false);

  const articles = [{
    id: 1,
    title: 'John입니다 :)',
    author: 'John',
  },
  {
    id: 2,
    title: 'Hue 입니다',
    author: 'Hue',
  },
  {
    id: 3,
    title: 'Jeong입니다.',
    author: 'Jeong',
  },
]
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {/* {visible && ( */}
      {visible ? (
        <header className="App-header">
          <Logo size={100} />
          <Logo />
          <Paragraph>
            Edit <code>src/App.js</code> and save to reload.
          </Paragraph>
          <Paragraph size={14} color="blue">
            I'm blue daba dte daba
          </Paragraph>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      ) : null}
      <Board articles={articles}></Board>
    </div>
  );
}

export default App;

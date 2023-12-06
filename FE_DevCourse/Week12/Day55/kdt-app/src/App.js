import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "리액트";
  const showLink = true;
  const showLogo = "show";
  const names = ["React", "Vue", "Angular"];

  return (
    /*
      // JSX를 사용하지 않고, 일일히 작성한 코드
      React.createElement('div', {className: 'App'}),
      React.createElement('header', {className: 'App-header'}, ...))
      h('div', {className: 'App'}),
      h('header', {className: 'App-header'}, ...)
    */
    // 아래 같은 것을 JSX라고 부릅니다.
    // className - class가 이미 javascript내에서 예약어이기 때문이다.
    // 최상위 요소는 하나 - 가상 DOM에서 컴포넌트 변화를 효율적으로 감지하기 위해서다.
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          {showLogo === "show" ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <h1>React</h1>
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {showLink && (
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn {name}
            </a>
          )}
          <ul>
            {names.map((item) => (
              <li key={item}>{item}</li> // key를 적어줘야 react에서 성능최적화를 해준다.
            ))}
          </ul>
        </header>
      </div>
      <span>Test</span>
    </React.Fragment>
  );
}

export default App;

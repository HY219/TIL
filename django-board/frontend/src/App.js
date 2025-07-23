import './App.css';
import axios from 'axios';
import Board from './components/Board';
import { Routes, Route } from 'react-router-dom';
import DetailBoard from './components/DetailBoard';
import WriteBoard from './components/WriteBoard';
import UpdateBoard from './components/UpdateBoard';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function App() {
  return (
    <Routes>
      <Route path="/board" element={<Board />} />
      <Route path="/board/:id" element={<DetailBoard />} />
      <Route path="/board/write" element={<WriteBoard />} />
      <Route path="/board/update/:id" element={<UpdateBoard />} />
    </Routes>
  );
}

export default App;

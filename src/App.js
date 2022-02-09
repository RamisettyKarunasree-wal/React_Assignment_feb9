import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Forum from './Forum';
import Ecommerce from './Ecommerce';
function App() {
  return (
    <div className="App">
      <h1>9 Feb 2022 Assignments</h1>
      <Comment></Comment>
      <Forum topic="About React"></Forum>
      <Ecommerce></Ecommerce>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import UseEffectExample from "./components/UseEffectExample";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UseEffectExample />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

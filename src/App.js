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
import ProductDetail from "./components/ProductDetail.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UseEffectExample />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
    </Router>
  );
};

export default App;

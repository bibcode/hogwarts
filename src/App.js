import Home from "./home";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
          <Home/>
      </div>
      <p className="footer">Copyright (c) 2024 Hogwarts International</p>
    </div>
  );
}

export default App;

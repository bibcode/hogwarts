import Home from "./home";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="bg-white component">
        <Navbar/>
          <Home/>
        </div>  
      </div>
      <p>Copyright (c) 2022 Hogwarts International</p>
    </div>
  );
}

export default App;

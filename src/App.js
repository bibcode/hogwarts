import Home from "./home";
import Info from "./info";
import Navbar from "./navbar";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <div className="content flex justify-center">
        <Home/>
          <Info/>
        </div>
      </div>
      <p className="footer">Copyright (c) 2024 Hogwarts International</p>
      <SpeedInsights />
    </div>
  );
}

export default App;

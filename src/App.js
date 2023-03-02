import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Home from "./pages/Home";
import DataDummy from "./pages/datadummy/DataDummy";

function App() {
  return (
    <BrowserRouter>
      <div className="" style={{ marginBottom: "60px" }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="datadammy" element={<DataDummy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

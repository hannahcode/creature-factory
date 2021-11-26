import Create from "./pages/Create/Create";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

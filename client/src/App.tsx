import { BrowserRouter, Route, Routes } from "react-router";
import NumberTap from "./pages/NumberTap";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/numbertap" element={<NumberTap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

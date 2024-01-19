import { Routes, Route } from "react-router-dom";
import Posts from "./components/posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
    </Routes>
  );
}

export default App;

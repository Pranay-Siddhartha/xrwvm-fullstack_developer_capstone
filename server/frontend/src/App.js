import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import PostReview from "./components/Dealers/PostReview";

function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/postreview/:id" element={<PostReview/>} />
        <Route path="/dealers" element={<Dealers/>} />


    </Routes>
  );
}
export default App;
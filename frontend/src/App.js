import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privatecomponent from "./components/Privatecomponent";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Privatecomponent/>}>
        <Route path="/profile" element={<Profile/>}></Route>
        </Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

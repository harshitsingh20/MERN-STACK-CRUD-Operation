import './App.css';
import NavBar from "./components/Navbar";
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

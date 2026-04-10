import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Login from "./components/Login";
import MyCart from "./components/MyCart";
import "./App.css"; // Ensure styles are imported

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Animated Background Blobs */}
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>

        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/MyCart" element={<MyCart />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

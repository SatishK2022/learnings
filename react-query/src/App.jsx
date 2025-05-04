import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts.jsx";
import Home from "./components/Home.jsx";
import PostDetails from "./components/PostDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="min-h-screen w-full bg-slate-900 text-white"> */}
        <Router>
          <div className="bg-gray-900 text-white min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetails />} />
            </Routes>
          </div>
        </Router>
      {/* </div> */}
    </>
  );
}

export default App;

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/home/Main";
import MainP from "./components/pastors/MainP";
import MainS from "./components/sermons/MainS";
import MainE from "./components/events/MainE";

// import "./style.css";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/pastors" element={<MainP />} />
          <Route exact path="/sermons" element={<MainS />} />
          <Route exact path="/events" element={<MainE />} />
          <Route path="*" element={<h1>Hello</h1>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;

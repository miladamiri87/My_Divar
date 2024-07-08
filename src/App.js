import {
  Link,
  NavLink,
  Outlet,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { getCity } from "./data/data";

import "./App.css";
// import About from "./Components/About";
import About from "./Components/About";
import Cards from "./Components/Cards";
import Adv from "./Components/Adv";
import News from "./Components/News";
import Services from "./Components/Services";
import NotFound from "./Components/NotFound";
import Cards_Details from "./Components/Cards_Details";
import Navbar from "./Components/Navbar";

const App = () => {
  const [getid, setId] = useState([]);
  let id_send = (x) => {
    setId(x);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/adv" element={<Adv />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/id/:id" element={<Cards_Details id={getid} />}></Route>

        <Route path=":city_name" element={<Cards />}>
          <Route path=":name_category" element={<Cards />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;

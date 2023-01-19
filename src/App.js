import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

import Container from "./components/pages/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>

        <Container customClass="min_height">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/company" element={<Company />} />
          <Route  path="/newproject" element={<NewProject />} />
      </Routes>
        </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;

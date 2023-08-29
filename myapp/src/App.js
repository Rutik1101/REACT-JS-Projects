import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/footer.scss";
import "./Styles/contact.scss";
import "./Styles/mediaquery.scss";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
      </header>
    </div> 
  );
}

export default App;

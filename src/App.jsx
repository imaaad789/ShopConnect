import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/produit";
import ProductDetails from "./pages/ProductDetail";
import Contact from "./pages/Contact";

import Container from "./components/Container";
import Card from "./components/Card";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const userName = "Imad Benj"; // modifie si besoin
  const today = new Date().toLocaleDateString();

  return (
    <ThemeContext.Provider value="dark">
      <Router>
        <Container>
          <header>
            <nav
              style={{
                backgroundColor: "#333",
                color: "white",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "8px",
              }}
            >
              <Link to="/" style={{ color: "white", marginRight: "15px" }}>Accueil</Link>
              <Link to="/about" style={{ color: "white", marginRight: "15px" }}>À propos</Link>
              <Link to="/products" style={{ color: "white", marginRight: "15px" }}>Produits</Link>
              <Link to="/contact" style={{ color: "white" }}>Contact</Link>
            </nav>
          </header>

          <main>
            {/* petit header d'info */}
            <Card>
              <h1>🛍️ ShopConnect</h1>
              <p>Par {userName} — {today}</p>
            </Card>

            {/* routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />}>
                <Route path=":id" element={<ProductDetails />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Container>
      </Router>
    </ThemeContext.Provider>
  );
}

import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  const handleFilter = () => {
    let result = products;

    if (search.trim() !== "") {
      result = result.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (minPrice !== "") {
      result = result.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice !== "") {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }
    setFilteredProducts(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nos Produits</h2>

      <div
        style={{
          marginBottom: "20px",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "10px",
        }} className="filter-box"
      >
        <h4>Filtres</h4>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Prix min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ marginRight: "10px", width: "90px" }}
        />
        <input
          type="number"
          placeholder="Prix max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ marginRight: "10px", width: "90px" }}
        />
        <button onClick={handleFilter}>Filtrer</button>
      </div>

      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((p) => (
            <li key={p.id} style={{ marginBottom: "10px" }}>
              <Link to={`${p.id}`}>{p.title} — {p.price} $</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit trouvé.</p>
      )}

      <Outlet />
    </div>
  );
}

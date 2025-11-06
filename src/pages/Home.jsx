import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";

export default function Home() {
  // exemple d'usage simple
  return (
    <div>
      <h2>Accueil</h2>
      <p>Bienvenue sur ShopConnect, votre boutique de vêtements en ligne !</p>

      <section style={{ marginTop: "20px" }}>
        <h4>Recherche rapide</h4>
        <SearchBar placeholder="Tapez pour rechercher..." />
      </section>

      <section style={{ marginTop: "20px" }}>
        <Cart />
      </section>
    </div>
  );
}

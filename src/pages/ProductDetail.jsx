import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="150" />
      <p>{product.description}</p>
      <p><strong>Prix :</strong> {product.price} $</p>
    </div>
  );
}

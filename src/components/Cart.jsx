import React, { useState, useMemo } from "react";

export default function Cart() {
  const [price] = useState(100);
  const [qty, setQty] = useState(1);

  const total = useMemo(() => price * qty, [price, qty]);

  return (
    <div>
      <h3>Calcul du total</h3>
      <p>Prix unitaire : {price} $</p>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        style={{ width: "80px" }}
      />
      <p>Total : {total} $</p>
    </div>
  );
}

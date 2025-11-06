import React, { useRef } from "react";

export default function SearchBar({ onChange, value, placeholder = "Rechercher..." }) {
  const inputRef = useRef(null);

  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{ padding: "8px", width: "240px", marginRight: "8px" }}
      />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>Focus</button>
    </div>
  );
}

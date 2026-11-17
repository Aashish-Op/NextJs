"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Product request failed (${response.status}).`);
        }

        const data = await response.json();
        if (!Array.isArray(data.products)) {
          throw new Error("The product service returned invalid data.");
        }

        setAllProducts(data.products);
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(requestError.message || "Unable to load products.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (category === "" || product.category === category),
  );

  const categories = [...new Set(allProducts.map((product) => product.category))];

  return (
    <div>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search by title"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((productCategory) => (
          <option key={productCategory} value={productCategory}>
            {productCategory}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          setSearchText("");
          setCategory("");
        }}
      >
        Clear Filters
      </button>

      {loading && <p>Loading products...</p>}
      {error && <p role="alert">{error}</p>}
      <p>Products found: {filteredProducts.length}</p>

      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={100}
              height={100}
              unoptimized
            />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}





































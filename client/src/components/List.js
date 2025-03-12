import { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/products/", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProducts(data);
      } catch (error) {
        alert("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <input
        class="dist form-control"
        type="text"
        placeholder="Search products by category..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ol class="list-group list-group-numbered">
        {products
          .filter((product) =>
            product.category.toLowerCase().includes(filter.toLowerCase())
          )
          .map((product) => (
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
              key={product.id}
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">{product.name}</div>
                {product.category}
              </div>
              <span class="badge text-bg-primary rounded-pill">
                {product.quantity}
              </span>
            </li>
          ))}
      </ol>
    </>
  );
}

export default ProductList;

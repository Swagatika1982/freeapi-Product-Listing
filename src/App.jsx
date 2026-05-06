import { useEffect, useState } from "react";

const API_URL = "https://api.freeapi.app/api/v1/public/randomproducts";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      const result = await response.json();

      const productList = result?.data?.data || [];

      setProducts(productList);
    } catch (err) {
      setError("Something went wrong while fetching products.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Product Listing App</h1>
        <p>Browse products fetched from the FreeAPI Products API</p>
      </header>

      {loading && <h2 className="message">Loading products...</h2>}

      {error && <h2 className="error">{error}</h2>}

      {!loading && !error && (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />

              <div className="product-info">
                <p className="category">{product.category}</p>
                <h2>{product.title}</h2>
                <p className="brand">Brand: {product.brand}</p>
                <p className="description">{product.description}</p>

                <div className="bottom-row">
                  <span className="price">${product.price}</span>
                  <span className="rating">⭐ {product.rating}</span>
                </div>

                <button>View Product</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
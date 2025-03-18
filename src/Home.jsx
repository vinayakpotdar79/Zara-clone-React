import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ZaraData.json");
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts([...data.product]); // Default display
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
 if (category === "men") {
      setFilteredProducts(products.Linen_data);
    } else if (category === "women") {
      setFilteredProducts(products.WomenData);
    } else if (category === "kids") {
      setFilteredProducts(products.KidsData);
    }
  }, [category, products]);

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setCategory("men")}>Men</button>
        <button onClick={() => setCategory("women")}>Women</button>
        <button onClick={() => setCategory("kids")}>Kids</button>
      </div>

      {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} width="100%"/>
              <h3>{product.name}</h3>
              <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home;

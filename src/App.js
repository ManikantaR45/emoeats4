import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import WebcamComponent from "./components/WebcamComponent";
import CapturedImageComponent from "./components/Image";
import OrderConfirmedComponent from "./components/OrderConfirmedComponent";
import CartPage from "./components/CartPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ line_items: [] });

  const [quantities, setQuantities] = useState({});
  const handleAddButtonClick = (productId) => {
    setQuantities({ ...quantities, [productId]: 1 });
  };

  // Handler to increase the quantity of a product
  const handleAdd = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: (quantities[productId] || 0) + 1,
    });
  };

  // Handler to decrease the quantity of a product
  const handleRemove = (productId) => {
    if (quantities[productId] > 0) {
      const updatedQuantities = {
        ...quantities,
        [productId]: quantities[productId] - 1,
      };
      if (updatedQuantities[productId] === 0) {
        delete updatedQuantities[productId];
      }
      setQuantities(updatedQuantities);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const foodItems = [
      {
        id: 1,
        name: "Burger",
        price: "25",
        pprice: "30",
        image:
        "https://img.freepik.com/free-photo/view-3d-burger-with-inflatable-bread-bun_23-2150914883.jpg?t=st=1713339792~exp=1713343392~hmac=29426b420aaabcd61b7f44020a0c83a8a60203b19e7171e85a4c5187771c444b&w=740",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Pizza",
        price: "30",
        pprice: "35",
        image:
          "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996&t=st=1714637737~exp=1714638337~hmac=43f437a3a1489b248e5b1764b266a19cdd45eeef952e582094411237cea9b0b5",
        rating: 4.5,
      },

      // Add more food items as needed
    ];

    setProducts(foodItems);
  };

  const handleAddToCart = (productId, quantity) => {
    const existingItem = cart.line_items.find((item) => item.id === productId);

    if (existingItem) {
      // If item already exists in cart, update its quantity
      const updatedCart = cart.line_items.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart({ ...cart, line_items: updatedCart });
    } else {
      // If item is not in cart, add it as a new item
      const itemToAdd = products.find((product) => product.id === productId);
      if (itemToAdd) {
        setCart({
          ...cart,
          line_items: [...cart.line_items, { ...itemToAdd, quantity }],
        });
      }
    }
  };
  



  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Typography
                  variant="h5"
                  fontWeight="1000"
                  sx={{ ml: 15, mb: 1, fontFamily: 'Poppins, sans-serif' }}
                >
                  Webcam
                </Typography>
                <WebcamComponent  />
              </div>
            }
          />
          <Route
            path="/captured-image"
            element={
              <CapturedImageComponent
                
                products={products}
                handleAddToCart={handleAddToCart}
                handleAddButtonClick={handleAddButtonClick}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                quantities={quantities}
              />
            }
          />
          <Route path="/order" element={<OrderConfirmedComponent />} />
          <Route path="/cart" element={<CartPage quantities={quantities} products={products} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const CartPage = ({ products, quantities }) => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handlePlaceOrder = () => {
    // Perform any additional actions before navigating if needed
    navigate("/order"); // Navigate to the '/order' route
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          fontFamily: "Poppins",
          marginBottom: "20px",
          marginLeft: "120px",
        }}
      >
        Your Cart
      </Typography>

      {products.map(
        (product) =>
          quantities[product.id] > 0 && (
            <Card
              key={product.id}
              sx={{
                mb: 2,
                background: "#e9f5f0",
                borderRadius: "10px",
                overflow: "hidden", // Hide overflow to prevent image overflow
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                {/* Square image with rounded corners */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: 70,
                    height: 70,
                    marginRight: 10,
                    borderRadius: "8px", // Rounded corners
                    objectFit: "cover", // Maintain aspect ratio and cover the container
                  }}
                />
                {/* Text information aligned to the right */}
                <div style={{ flex: 1, marginLeft: "50px" }}>
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography>Quantity: {quantities[product.id]}</Typography>
                  <Typography>
                    <strong>
                      Total: {product.price * quantities[product.id]}
                    </strong>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          )
      )}

      {/* Place Order Button */}
      <Button
        variant="contained"
        sx={{
          p: "1",
          height: "58px",
          width: "375px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3cba79",
          color: "#fff",
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handlePlaceOrder} // Handle click event to navigate to '/order'
      >
        <div
          style={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          Place Order
        </div>
      </Button>
    </div>
  );
};

export default CartPage;

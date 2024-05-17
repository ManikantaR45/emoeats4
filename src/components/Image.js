import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent } from "@mui/material";
import Rating from "@mui/material/Rating";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation, useNavigate } from "react-router-dom";

const CapturedImageComponent = ({
  handleAddToCart,
  products,
  handleAddButtonClick,
  handleAdd,
  handleRemove,
  quantities,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageData } = location.state || {};

  const addToCart = () => {
    Object.entries(quantities).forEach(([productId, quantity]) => {
      handleAddToCart(productId, quantity);
    });
    navigate("/cart");
  };

  return (
    <div
      style={{
        margin: "20px",
        textAlign: "center",
        minHeight: "calc(100vh - 100px)",
        paddingBottom: "100px",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ fontFamily: "Poppins", display: "inline-block", mb: 3 }}
      >
        Welcome to Brioche Doree-Bangalore
      </Typography>

      <div>
        {imageData && (
          <img
            src={imageData}
            alt="Captured"
            style={{
              maxWidth: "100%",
              borderRadius: "10px 80px 10px 80px",
              marginBottom: "20px",
            }}
          />
        )}
      </div>

      <Typography
        variant="body1"
        fontWeight="500"
        sx={{
          fontFamily: "Poppins",
          margin: "0 10px",
          display: "block",
          textAlign: "justify",
        }}
      >
        Hello! Brioche Doreeians, Our AK-EMOEATS is recognizing that the person
        in the photo has a neutral facial expression. He is looking at the
        camera with a slightly raised eyebrow. His mouth is closed and his lips
        are slightly pursed. His cheeks are slightly flushed, which may be due
        to the lighting or because he is feeling warm.
      </Typography>
      <Button
        variant="contained"
        sx={{
          borderRadius: "10px",
          fontFamily: "Poppins",
          backgroundColor: "#3cba79",
          color: "#fff",
          margin: "20px auto",
          width: "100%",
          height: "48px",
          textTransform: "none", // Ensure text transformation is set to 'none'
        }}
      >
        Click here to recheck
      </Button>

      <div style={{ maxWidth: "100%", margin: "0 auto 20px" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontFamily: "Poppins", margin: "0 0px", width: "100%" }}
        >
          Our AK-EMOEATS suggested Food
        </Typography>
      </div>

      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            mb: 2,
            background: "#e9f5f0",
            display: "flex",
            borderRadius: "10px",
            margin: "10px -20px",
          }}
        >
          <CardContent
            sx={{ flex: "1", display: "flex", alignItems: "center" }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: 70,
                height: 70,
                marginRight: 10,
                marginBottom: 38,
                borderRadius: "8px",
              }}
            />
          </CardContent>
          <CardContent
            sx={{
              flex: "2",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Typography>{product.name}</Typography>
            <Typography>
              <strong>{product.price}</strong> <del>{product.pprice}</del>
            </Typography>
            <Rating name="read-only" value={product.rating} readOnly />
          </CardContent>

          <CardContent
            sx={{
              flex: "2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 10,
              mr: 4,
            }}
          >
            {quantities[product.id] ? (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "0px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "-8px",
                }}
              >
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  onClick={() => handleRemove(product.id)}
                  sx={{
                    p: "5px",
                    minWidth: "24px",
                    minHeight: "24px",
                    background: "#e1e1e1",
                    color: "white",
                  }}
                >
                  <RemoveIcon />
                </Button>
                <Typography variant="body1" sx={{ mx: "5px", padding: "4px" }}>
                  {quantities[product.id]}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  onClick={() => handleAdd(product.id)}
                  sx={{
                    p: "5px",
                    minWidth: "24px",
                    minHeight: "24px",
                    background: "#3cba79",
                    color: "white",
                  }}
                >
                  <AddIcon />
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={() => handleAddButtonClick(product.id)}
                sx={{
                  p: "5px",
                  minWidth: "24px",
                  minHeight: "24px",
                  background: "#3cba79",
                  color: "white",
                }}
              >
                <AddIcon />
                <Typography variant="body1" sx={{ mx: "5px", color: "white" }}>
                  Add
                </Typography>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}

      <Button
        variant="contained"
        onClick={addToCart}
        sx={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          fontFamily: "Poppins",
          backgroundColor: "#3cba79",
          color: "#fff",
          width: "375px",
          height: "58px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {Object.values(quantities).reduce((total, qty) => total + qty, 0)}{" "}
          item
          {Object.values(quantities).reduce((total, qty) => total + qty, 0) !==
          1
            ? "s"
            : ""}{" "}
          added
        </div>
        <div>View Cart</div>
      </Button>
    </div>
  );
};

export default CapturedImageComponent;

import Products from "../products"; // Import the products array from products.js
import Card from "react-bootstrap/Card"; // Import Bootstrap Card component

// Component to display product cards
const ProductCard = () => {
  return (
    <>
      {/* Map through the products array and return a Card for each product */}
      {Products.map((product, index) => (
        <Card
          key={index}
          style={{ width: "18rem" }}
          className="text-center shadow m-3"
        >
          <Card.Body>
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              width="100%"
              height="200px"
            />

            {/* Product Name */}
            <h5>{product.name}</h5>

            {/* Product Description */}
            <p>{product.description}</p>

            {/* Product Price */}
            <strong>${product.price}</strong>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ProductCard; // Export the component to be used in App.js

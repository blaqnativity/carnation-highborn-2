import NavMenu from "./components/NavMenu";
// Import the Navbar component
import Container from "react-bootstrap/Container"; // Import Bootstrap Container
import Card from "react-bootstrap/Card";
import ProductCard from "./components/ProductCard";

const App = () => {
  const firstName = "Olukayode";
  const greeting = "Hello there, ";
  return (
    <>
      {/* Navbar Component */}
      <NavMenu />

      {/* Container to hold product cards */}
      <Container className="mt-5 d-flex flex-wrap gap-4 justify-content-center">
        <ProductCard />{" "}
        {/* Render ProductCard component, which maps through products */}
      </Container>

      <Container className="my-5 w-25">
        <Card className="p-3 text-center">
          <h3>
            {greeting}
            {firstName}
          </h3>
        </Card>
      </Container>
    </>
  );
};

export default App; // Export App component as the main entry point of the application

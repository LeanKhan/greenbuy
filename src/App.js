// import logo from "./logo.svg";
import "./App.css";
// components
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

// data
import products from "./data/products.json";

function App() {
  return (
    <div className="App bg-gray-200 pb-5 dark:bg-gray-800">
      <Header />

      <main className="py-6">
        <div className="md:w-1/2 px-2 md:px-0 mx-auto">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Counter from "./Components/Counter/Counter";
import Feature from "./Components/Feature/Feature";
import Category from "./Components/Category/Category";
import Categories from "./Components/Categories/Categories";
import Faqs from "./Components/Faqs/Faqs";
import Getready from "./Components/Getready/Getready";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Counter />
      <Feature />
      <Category />
      <Categories />
      <Faqs />
      <Getready />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import Books from "./routes/Products/Books";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="products" element={<Products />}>
            <Route index element={<Computers />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          
          <Route path="about" element={<About />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// src/pages/Home.jsx
import React from "react";
import CarouselHome from "../components/Carousel";
import Inventory from "../components/Inventory";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function Home() {
  return (
    <div className="app-container">
      <main className="main-content">
        <CarouselHome />
        <Inventory />
      </main>
      <Footer />
    </div>
  );
}

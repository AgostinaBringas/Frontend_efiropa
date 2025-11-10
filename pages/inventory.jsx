// src/components/Inventory.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      nombre: "Remera Oversize",
      precio: 12000,
      descripcion: "Remera de algodón premium",
      imagen: "/images/ropa/REMERAHOMBRE1.jpg",
    },
    {
      id: 2,
      nombre: "Pantalón Jogger",
      precio: 18000,
      descripcion: "Jogger de gabardina",
      imagen: "/images/ropa/BABUCHAHOMBRE1.jpg",
    },
    {
      id: 3,
      nombre: "Chomba The Social Club",
      precio: 25000,
      descripcion: "Chombas cómodas y modernas",
      imagen: "/images/ropa/CHOMBA1.jpg",
    },
  ];

  const handleViewProduct = (id) => {
    navigate(`/producto/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 fw-bold" style={{ letterSpacing: "2px" }}>
        INVENTARIO DE PRENDAS
      </h2>
      <div className="row justify-content-center">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow-sm border-0"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{p.nombre}</h5>
                <p className="card-text text-muted">{p.descripcion}</p>
                <p className="card-text fw-bold mb-3">${p.precio}</p>
                <button
                  className="btn btn-dark px-4"
                  onClick={() => handleViewProduct(p.id)}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
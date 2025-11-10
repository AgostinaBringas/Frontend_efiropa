import React from "react";
import { Container } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import "../styles/global.css"; 
export default function Footer() {
  return (
    <footer>
      <Container>
        <h5 style={{ fontFamily: "Playfair Display", fontWeight: 600 }}>
          TAORMINA
        </h5>
        <p style={{ marginBottom: "8px" }}>
          Moda unisex | Estilo mediterráneo
        </p>
        <div>
          <a
            href="#"
            style={{ color: "white", margin: "0 10px", fontSize: "1.3rem" }}
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            style={{ color: "white", margin: "0 10px", fontSize: "1.3rem" }}
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            style={{ color: "white", margin: "0 10px", fontSize: "1.3rem" }}
          >
            <FaTiktok />
          </a>
        </div>
        <p style={{ marginTop: "10px", fontSize: "0.8rem", opacity: 0.8 }}>
          © {new Date().getFullYear()} Taormina. Todos los derechos reservados.
        </p>
      </Container>
      
    </footer>
  );
}

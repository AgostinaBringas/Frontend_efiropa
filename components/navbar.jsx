// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

export default function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar-dark"
      style={{
        backgroundColor: "var(--secondary-bg)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Container>
        {/* 🔹 LOGO */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center"
          style={{
            fontFamily: "var(--font-title)",
            letterSpacing: "2px",
            fontSize: "1.8rem",
            color: "var(--text-color)",
          }}
        >
          {/* Si querés mostrar tu logo imagen */}
          <img
            src="/images/LOGOTAORMINA.png"
            alt="Taormina"
            height="45"
            className="me-2"
            style={{ borderRadius: "10px" }}
          />
          TAORMINA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink
              to="/"
              className="nav-link px-3"
              style={({ isActive }) => ({
                color: isActive ? "var(--accent-color)" : "white",
                fontWeight: isActive ? "600" : "400",
              })}
            >
              Inicio
            </NavLink>

            {/* 🔹 Menú de categorías */}
            <NavLink
              to="/categoria/pantalon"
              className="nav-link px-3"
              style={({ isActive }) => ({
                color: isActive ? "var(--accent-color)" : "white",
              })}
            >
              Pantalones
            </NavLink>

            <NavLink
              to="/categoria/chomba"
              className="nav-link px-3"
              style={({ isActive }) => ({
                color: isActive ? "var(--accent-color)" : "white",
              })}
            >
              Chombas
            </NavLink>

            <NavLink
              to="/categoria/buzo"
              className="nav-link px-3"
              style={({ isActive }) => ({
                color: isActive ? "var(--accent-color)" : "white",
              })}
            >
              Buzos
            </NavLink>

            {/* 🔹 Acciones de usuario */}
            <NavLink
              to="/login"
              className="nav-link px-3"
              style={({ isActive }) => ({
                color: isActive ? "var(--accent-color)" : "white",
              })}
            >
              Iniciar sesión
            </NavLink>

            <NavLink
              to="/register"
              className="nav-link px-3"
              style={({ isActive }) => ({
                color: isActive ? "var(--accent-color)" : "white",
              })}
            >
              Registrarse
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

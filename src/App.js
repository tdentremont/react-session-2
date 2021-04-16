import React from "react";
import "./style.css";
import Header from './components/Header/Header';
import Router from './components/Router';
import Footer from './components/Footer/Footer';

const NavItems = [
  {
    "name": "Home",
    "path": "/home"
  },
  {
    "name": "Services",
    "path": "/services"
  },
  {
    "name": "Events",
    "path": "/events"
  },
  {
    "name": "Contact Us",
    "path": "/contactus"
  },
  {
    "name": "Products",
    "path": "/products"
  },
  {
    "name": "Examples",
    "path": "/examples"
  }
];



export default function App() {
  return (
    <div>
      <Header navItems={NavItems} />
      <Router />
      <Footer navItems={NavItems} />
    </div>
    );
}

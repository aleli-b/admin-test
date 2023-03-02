import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import { Header } from './layout/header/Header';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Footer } from './layout/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import { ToDoList } from './pages/toDoList/ToDoList';
import { Contact } from './pages/contact/Contact';
import { About } from './pages/about/About';
import { NotFound } from './pages/notFound/NotFound';
import { ProductAdmin } from './pages/productAdmin/ProductAdmin';
import { AdminRoute } from './guard/adminRoute/AdminRoute';
import { Login } from './components/Login';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function App() {
  // let [products, setProducts] = useState([]);

  // useEffect(() => {
  //   loadProducts()
  // }, [])

  // function loadProducts() {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(response => {
  //       setProducts(response.products);
  //     })
  // }


  return (
    <>
      <Header></Header>
      <Container fluid className='d-flex'>
            <Sidebar></Sidebar>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="list" element={<ToDoList />} />
              <Route path="about" element={<About />} />
              <Route path="productAdmin" element={<AdminRoute><ProductAdmin /></AdminRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
      </Container>
      <Footer></Footer>

      {/* {
          products.map(prod => {
            return (
              <div key={prod.id}>{prod.title}</div>
            )
          })
        } */}
    </>
  );
}

export default App;

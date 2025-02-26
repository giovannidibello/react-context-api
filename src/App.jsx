// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il contesto creato (Global)
import GlobalContext from './contexts/GlobalContext';

// gestione dati posts per listato
import { useState, useEffect } from 'react';
import axios from "axios";

import './App.css'

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {

  //  settaggio dello stato del componente
  const [post, setPost] = useState([]);

  // funzione di gestione chiamata all'API
  function fetchPost() {
    axios.get("http://localhost:3000/posts/")
      .then((res) =>
        setPost(res.data)
      )
      .catch((err) => console.error("Errore:", err));

  }


  useEffect(
    () => fetchPost(),
    [])

  return (

    <>
      <GlobalContext.Provider value={{ post }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:id" element={<PostDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App

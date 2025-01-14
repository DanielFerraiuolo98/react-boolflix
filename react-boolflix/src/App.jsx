import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=70f7f9ddab19c38e31331a2bc333f7ca&query=a&language=it-IT";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App

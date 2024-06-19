import React from "react"
import './css/App.css'  
import Navbar from "./components/Navbar.jsx"
import AdAndChat from "./components/AdAndChat.jsx" 
import CardsContainer from "./components/CardsContainer.jsx"

export default function App() {
  return (
    <>
          <Navbar />
          <AdAndChat />
          <CardsContainer />
          <br /><br /><br />
          <h1>Footer</h1>            
    </>
  )
}
 
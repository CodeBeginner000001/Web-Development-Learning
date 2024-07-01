import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ProductTab from "./ProductTab.jsx"
// import Message from "./message.jsx"

import CardCollection from "./CardCollection.jsx"

function App() {
  return (
    <>
    {/* Message command lines are activity perform during lecture */}
    {/* <Message name="Adarsh" textcolor="Red"/>
    <Message name="Anchal" textcolor="Violet"/>
    <Message name="Sneha" textcolor="Purple"/> */}
    {/* <ProductTab /> */}

    {/* Amazon Card Activity */}
    <h1>Blockbuster Deals | Shop Now</h1>
    <CardCollection />
    </>
  );
}

export default App

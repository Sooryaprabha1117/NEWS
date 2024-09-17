import { useState } from "react";
import Navbar from "./Components/Navbar";
import  NewsBoard  from "./Components/NewsBoard";
import NewsItem from "./Components/NewsItem";

import images from "./Components/header.webp";
const App = () => {
  const [category,setCategory]=useState("general")
  return (
    <div className="bg-body-secondary">
      <img src={images}  className="img-fluid sticky-start" style={{ width: '100%', height: '250px', position: 'sticky', zIndex: '100' }} />
      <Navbar setCategory={setCategory}/>
      
      <NewsBoard category={category}/>
      <NewsItem/>
    </div>
  )
}

export default App
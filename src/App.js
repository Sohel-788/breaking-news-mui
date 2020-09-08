import React, { useState, useEffect } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
  const [articles, setArticles]= useState([]);
  useEffect(()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=e892ab7de87f4bc9a1d2e35c9c17e50e';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
  return (
    <div className="App">
      <header className="App-header">
       <h1>Breaking News designed by M-ui</h1>
       {
         articles.map(article=>  <News article={article}></News>)
       }
      
      </header>
    </div>
  );
}

export default App;

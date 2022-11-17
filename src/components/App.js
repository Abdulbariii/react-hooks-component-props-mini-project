import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}></Header>

      <About about={blogData.about} image={blogData.image}></About>
      <ArticleList posts={blogData.posts}></ArticleList>
    </div>
  );
}

export default App;

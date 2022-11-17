import React from "react";
import Article from "./Article";
export default function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          preview={post.preview}
          data={post.date}
          title={post.title}
        ></Article>
      ))}
    </main>
  );
}

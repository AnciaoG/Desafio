import React from "react";
import PostItem from "./PostItem";

export default function PostList() {
  const posts = Array.from({ length: 500 }).map((_, i) => ({
    id: i,
    title: `Post ${i + 1}`,
    image: `https://picsum.photos/seed/${i}/400/200`,
    summary: `Resumo do post ${i + 1}`
  }));

  const handleCommentEvent = (index) => {
    if (index === 249) {
      alert("⚡ Comentário adicionado ao Post 250!");
    }
  };

  return (
    <div>
      {posts.map((p, i) => (
        <PostItem
          key={p.id}
          index={i}
          title={p.title}
          image={p.image}
          summary={p.summary}
          onComment={() => handleCommentEvent(i)}
        />
      ))}
    </div>
  );
}

import React, { useState } from "react";

export default function PostItem({ index, title, image, summary, onComment }) {
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    const newComment = `Comentário automático do post ${index + 1}`;
    setComments([...comments, newComment]);
    if (onComment) onComment(newComment);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{index + 1} - {title}</h3>
      <img src={image} alt="" style={{ width: "100%", height: 200, objectFit: "cover" }} />
      <p>{summary}</p>
      <button onClick={handleAddComment}>Comentar</button>

      {comments.map((c, i) => (
        <p key={i} style={{ fontSize: 12 }}>💬 {c}</p>
      ))}
    </div>
  );
}

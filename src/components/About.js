import React from "react";

export default function About({ image, about }) {
  return (
    <aside>
      <img
        alt="blog logo"
        src={image ? image : "https://via.placeholder.com/215"}
      ></img>
      <p>{about}</p>
    </aside>
  );
}

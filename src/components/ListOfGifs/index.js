import React from "react";
import Gif from "components/Gif";
import "./styles.css";

export default function ListOfGifs({ params }) {
  return (
    <div className="gif-container">
      {params.map((gif) => (
        <div key={gif.id}>
          <Gif
            key={gif.id}
            id={gif.id}
            title={gif.title}
            url={gif.url}
            detalle={false}
          ></Gif>
        </div>
      ))}
    </div>
  );
}

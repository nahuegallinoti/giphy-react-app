import React from "react";
import Gif from "components/Gif/index.js";
import useGlobalGifs from "hooks/globalGifs.js";
import "./styles.css";
import Search from "components/Search";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((gif) => gif.id === params.id) || undefined;

  return (
    <>
      {gif === undefined ? (
        <h1>No se encontró ningún gif</h1>
      ) : (
        <>
          <Search />
          <Gif id={gif.id} title={gif.title} url={gif.url} detalle={true} />
        </>
      )}
    </>
  );
}

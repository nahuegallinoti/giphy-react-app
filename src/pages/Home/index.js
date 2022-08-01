import React from "react";
import { Link } from "wouter";
import "./styles.css";
import { useGifs } from "hooks/useGifs.js";
import ListOfGifs from "components/ListOfGifs";
import Search from "components/Search";

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador", "Rick"];

export default function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <h1>Giffys</h1>
      <Search />
      <h4 className="title-populares">Los gifs más populares</h4>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li className="popular-gifs" key={popularGif}>
            <Link className="popular-gifs-links" to={`/search/${popularGif}`}>
              Gifs de {popularGif}
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs params={gifs} />
    </>
  );
}

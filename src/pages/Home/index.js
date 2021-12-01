import React from "react"
import { Link, useLocation } from "wouter"
import './styles.css'

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {

  const [, setLocation] = useLocation();

  return (
    <>
      <h1>Giffys</h1>
      <input className='input-keyword' id='Nombre' name='Nombre' placeholder='Gifs de...'></input>

      <Link to='/search/' onClick={() => {
        const path = `/search/${document.getElementById('Nombre').value}`
        setLocation(path)
      }}><button className='btn-buscar'>Buscar</button></Link>


      <h4 className="App-title">Los gifs más populares</h4>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>

    </>
  )
}
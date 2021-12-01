import React from "react";
import Gif from '../Gif';
import { Link } from 'wouter';
import './styles.css'

export default function ListOfGifs({ params }) {

  return <div>
    {
      params.map((gif) =>
        <div>
          <Gif key={gif.id} params={gif}></Gif>
          <Link to={`/detalle/${gif.id}`} className='Gif-link'>
            <button className='btn-detalle'>Detalle</button></Link>
        </div>
      )
    }
  </div>
}
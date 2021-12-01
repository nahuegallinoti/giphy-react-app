import React from 'react'
import { useState, useEffect } from 'react';
import getGifById from '../../services/getGifById';
import Gif from '../../components/Gif';
import Spinner from '../../components/Spinner';


export default function DetalleGif ({ params }) {
  const [gif, setGif] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = params;

  useEffect(function () {
    setLoading(true)

    getGifById({ id }).then(gif => {
      gif.url = gif.images.downsized.url;
      setGif(gif)
      setLoading(false)
    })
  }, [id]);

  if (loading)
    return <Spinner />

  return <div>
      <Gif key={id} params={gif}></Gif>
  </div>

};
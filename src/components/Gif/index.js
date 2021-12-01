import React from 'react';
import './Gif.css';

export default function Gif({ params }) {

  const { id, title, url } = params;

  return (
    <div className='Gif'>
      <h4>{title}</h4>
      <img key={id} alt={title} src={url} />
    </div>
  )
};
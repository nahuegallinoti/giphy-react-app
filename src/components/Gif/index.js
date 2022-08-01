import React from "react";
import "./Gif.css";
import { Link } from "wouter";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Gif({ id, title, url, detalle }) {
  return (
    <>
      <div className="Gif">
        <Link to={`/detalle/${id}`}>
          <img
            className="image-gif"
            loading="lazy"
            key={id}
            alt={title}
            src={url}
          />
        </Link>
        <p>{title}</p>
      </div>
      {detalle && (
        <button className="btn-volver">
          <Link to={"/"}>
            <MdOutlineArrowBack />
          </Link>
        </button>
      )}
    </>
  );
}

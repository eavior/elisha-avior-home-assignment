import { useEffect, useState, useRef } from "react";

export default function FilmDetails(props) {
  const { title, episode, abstract } = props;

  return (
    <>
      <h1>Film details</h1>
      <h2>{title}</h2>
      <p>Episode {episode}</p>
      <p>{abstract}</p>
      <button type="button" className="btn btn-primary text-start">
        Favorite (Episode {episode})
      </button>
    </>
  );
}

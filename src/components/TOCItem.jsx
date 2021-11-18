// import { useEffect, useState, useRef } from "react";

export default function TOCItem(props) {
  const { title, episode, onSelectFilm, index } = props;

  const handleSelection = (index) => {
    onSelectFilm(index);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary text-start"
        onClick={() => handleSelection(index)}>
        Episode {episode}: {title}
      </button>
    </>
  );
}

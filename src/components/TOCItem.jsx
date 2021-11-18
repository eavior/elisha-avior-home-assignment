import { useEffect, useState, useRef } from "react";

export default function TOCItem(props) {
  const { title, episode, onSelectFilm, index } = props;
  const [buttonActive, setButtonActive] = useState("active");

  // useEffect(() => {
  //   // isMounted.current = true;
  //   setButtonActive("active");
  //   // return () => {
  //   //   isMounted.current = false;
  //   // };
  // }, [props]);

  const handleSelection = (index) => {
    setButtonActive("active");
    onSelectFilm(index);
  };

  return (
    <>
      <button
        type="radio"
        className={`btn btn-primary text-start btn-block ${buttonActive}`}
        onClick={() => handleSelection(index)}>
        {title}
      </button>
    </>
  );
}

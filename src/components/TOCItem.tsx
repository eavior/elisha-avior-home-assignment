import { useEffect, useState } from "react";

export default function TOCItem(props: {
  title: string,
  titleSelectedFilm: string,
  index: number,
  onSelectFilm: any,
}) {
  const { title, titleSelectedFilm, index, onSelectFilm } = props;
  const [buttonActive, setButtonActive] = useState("active");

  useEffect(() => {
    titleSelectedFilm === title ? setButtonActive("active") : setButtonActive("");
  }, [titleSelectedFilm, title]);

  const handleSelection = (index: number) => {
    setButtonActive("active");
    onSelectFilm(index);
  };

  return (
      <button
        className={`btn btn-primary text-start btn-block ${buttonActive}`}
        onClick={() => handleSelection(index)}>
        {title}
      </button>
  );
}

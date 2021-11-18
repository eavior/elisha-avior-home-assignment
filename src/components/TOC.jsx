import TOCItem from "./TOCItem";

export default function TOC(props) {
  const { allFilms, onSelectFilm } = props;

  return (
    <>
      <div>
        <div
          className="btn-group-vertical gap-1"
          role="group"
          aria-label="Basic example">
          {allFilms.map((item, index) => (
            <TOCItem
              key={item.created}
              index={index}
              title={item.title}
              episode={item.episode_id}
              onSelectFilm={(index) => onSelectFilm(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

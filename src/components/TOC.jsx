import TOCItem from "./TOCItem";

export default function TOC(props) {
  const { allFilms, onSelection } = props;

  return (
    <>
      <h1>TOC</h1>
      <div>
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Basic example">
          {allFilms.map((item, index) => (
            <TOCItem
              key={item.created}
              index={index}
              title={item.title}
              episode={item.episode_id}
              onSelection={(index) => onSelection(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

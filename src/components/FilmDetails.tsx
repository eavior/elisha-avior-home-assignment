import { useEffect, useState } from "react";

export default function FilmDetails(props: {
  title: string,
  episode: number,
  abstract: string,
  favoritesList: Array<number>,
  onSelectFavorite: any,
}) {
  const { title, episode, abstract, favoritesList, onSelectFavorite } = props;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const isFavorite = !favoritesList
      ? false
      : favoritesList.find((element) => element === episode)
      ? true
      : false;
    setFavorite(isFavorite);
  }, [favoritesList, episode, favorite]);

  return (
    <>
      <div className="card">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
          <h5 className="card-title fw-lighter">Episode {episode}</h5>
          <p
            className="card-text text-start pl-3"
            style={{ whiteSpace: "pre-wrap" }}>
            {abstract}
          </p>
          {favorite && (
            <button
              type="button"
              name="Remove"
              className="btn btn-outline-danger text-start"
              onClick={() => onSelectFavorite(episode, !favorite)}>
              Remove from favorites
              <i
                className="bi bi-bookmark-x-fill icon-size align-middle"
                style={{ paddingLeft: "0.3em" }}></i>
            </button>
          )}
          {!favorite && (
            <button
              type="button"
              name="Add"
              className="btn btn-outline-success text-start"
              onClick={() => onSelectFavorite(episode, !favorite)}>
              <i
                className="bi bi-bookmark-plus-fill icon-size align-middle"
                style={{ paddingRight: "0.3em" }}></i>
              Add to favorites
            </button>
          )}
        </div>
      </div>
    </>
  );
}

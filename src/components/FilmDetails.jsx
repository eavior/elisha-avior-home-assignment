import { useEffect, useState } from "react";

export default function FilmDetails(props) {
  const { title, episode, abstract, favoritesList, onSelectFavorite } = props;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    // isMounted.current = true;
    const isFavorite = !favoritesList
      ? false
      : favoritesList.find((element) => element === episode)
      ? true
      : false;
    setFavorite(isFavorite);
    console.log(favoritesList);
    console.log(isFavorite);
    // return () => {
    //   isMounted.current = false;
    // };
  }, [favoritesList, episode, favorite]);

  const handleFavoriteSelection = (episode) => {
    onSelectFavorite(episode, !favorite);
  };

  console.log(abstract);

  return (
    <>
      <div className="card">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
          <h5 class="card-title fw-lighter">Episode {episode}</h5>
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
              onClick={() => handleFavoriteSelection(episode)}>
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
              onClick={() => handleFavoriteSelection(episode)}>
              <i
                className="bi bi-bookmark-plus-fill icon-size align-middle"
                style={{ paddingRight: "0.3em" }}></i>
              Add to favorites
            </button>
          )}
        </div>
      </div>
      {/* <h1>Film details</h1>
      <h2>{title}</h2>
      <p>
        Episode {episode}
        <i className="bi bi-heart-fill"></i>
      </p>
      <p>{abstract}</p>
      {favorite && <div>favorite</div>}
      {!favorite && <div>not favorite</div>}

      {favorite && (
        <button
          type="button"
          className="bi bi-heart-fill btn btn-primary text-start"
          onClick={() => handleFavoriteSelection(episode)}>
          Remove from favorites
        </button>
      )}
      {!favorite && (
        <button
          type="button"
          className="bi bi-heart btn btn-primary text-start"
          onClick={() => handleFavoriteSelection(episode)}>
          Add to favorites
        </button>
      )} */}
    </>
  );
}

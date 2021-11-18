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
    // return () => {
    //   isMounted.current = false;
    // };
  }, [favoritesList, episode, favorite]);

  const handleFavoriteSelection = (episode) => {
    onSelectFavorite(episode, !favorite);
  };

  return (
    <>
      <h1>Film details</h1>
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
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { getAllFilms } from "../lib/api";
import FilmDetails from "./FilmDetails";
import TOC from "./TOC";

export default function Main() {
  const [allFilms, setAllFilms] = useState({});
  const [selectedFilm, setSelectedFilm] = useState();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("localFavorites")) || []
  );
  const localFilms = JSON.parse(localStorage.getItem("localFilms"));
  // const isMounted = useRef(false);

  useEffect(() => {
    // isMounted.current = true;
    const loadAllFilms = async () => {
      try {
        const allFilms = await getAllFilms();
        if (allFilms) {
          setAllFilms(allFilms);
          localStorage.setItem("localFilms", JSON.stringify(allFilms));
        }
      } catch (error) {
        alert(error);
      }
    };
    loadAllFilms();
    // localStorage.removeItem("localFavorites");
    // return () => {
    //   isMounted.current = false;
    // };
  }, []);

  const onSelectFilm = (index) => {
    setSelectedFilm({
      title: localFilms[index].title,
      episode: localFilms[index].episode_id,
      abstract: localFilms[index].opening_crawl,
    });
  };

  const onSelectFavorite = (episode, favorite) => {
    const allFavorites =
      JSON.parse(localStorage.getItem("localFavorites")) || [];
    if (favorite) allFavorites.push(episode);
    if (!favorite) {
      const i = allFavorites.indexOf(episode);
      allFavorites.splice(i, 1);
    }
    localStorage.setItem("localFavorites", JSON.stringify(allFavorites));
    setFavorites(allFavorites);
  };

  return (
    <>
      {!allFilms.length && <div>Spinner...</div>}
      {allFilms.length &&
        JSON.stringify(allFilms) === JSON.stringify(localFilms) && (
          <TOC allFilms={allFilms} onSelectFilm={onSelectFilm} />
        )}
      {!selectedFilm && allFilms.length && <div>Please select a film.</div>}
      {selectedFilm && (
        <FilmDetails
          title={selectedFilm.title}
          episode={selectedFilm.episode}
          abstract={selectedFilm.abstract}
          favoritesList={favorites}
          onSelectFavorite={onSelectFavorite}
        />
      )}
    </>
  );
}

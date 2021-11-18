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
    console.log(episode);
    console.log(favorite);
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
      <div className="container-lg m-3">
        {!allFilms.length && (
          <div>
            <div
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"></div>
            <div>Loading...</div>
          </div>
        )}
        {allFilms.length && (
          <div
            className="row row-cols-auto justify-content-center"
            style={{ minHeight: "80vh" }}>
            <div className="col col-sm-auto mb-3 d-flex align-items-sm-center">
              <div className="col-sm-auto text-xs-end text-md-center">
                {JSON.stringify(allFilms) === JSON.stringify(localFilms) && (
                  <TOC allFilms={allFilms} onSelectFilm={onSelectFilm} />
                )}
              </div>
              {/* <div className="col-md-auto">favorites</div> */}
            </div>
            <div
              className="col text-xs-start text-md-center d-flex align-items-sm-center justify-content-center"
              style={{ minWidth: "20em" }}>
              {!selectedFilm && <div>Please select a film.</div>}
              {selectedFilm && (
                <FilmDetails
                  title={selectedFilm.title}
                  episode={selectedFilm.episode}
                  abstract={selectedFilm.abstract}
                  favoritesList={favorites}
                  onSelectFavorite={onSelectFavorite}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

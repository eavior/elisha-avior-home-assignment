import { useEffect, useState } from "react";
import { getAllFilms } from "../lib/api";
import FilmDetails from "./FilmDetails";
import TOC from "./TOC";

export default function Main() {
  const [allFilms, setAllFilms] = useState<any[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<any>({});
  const [favorites, setFavorites] = useState<any>(JSON.parse(localStorage.getItem("localFavorites") || '[]'));

  useEffect(() => {
    const loadAllFilms = async () => {
      try {
        const allFilmsFromAPI = await getAllFilms();
        if (allFilmsFromAPI) {
          setAllFilms(allFilmsFromAPI);
        }
      } catch (error) {
        alert(error);
      }
    };
    loadAllFilms();
    console.log('useEffect');
  }, []);

  console.log('render');

  const onSelectFilm = (index: any) => {
    setSelectedFilm({
      title: allFilms[index].title,
      episode: allFilms[index].episode_id,
      abstract: allFilms[index].opening_crawl,
    });
  };

  const onSelectFavorite = (episode: number, favorite: boolean) => {
    const allFavorites = JSON.parse(localStorage.getItem("localFavorites") || '[]');
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
            <div>We're retrieving the up-to-date Star Wars movie list for you.</div>
            <div>Just a moment please...</div>
          </div>
        )}
        {allFilms.length !== 0 && (
          <div
            className="row row-cols-auto justify-content-center"
            style={{ minHeight: "80vh" }}>
            <div className="col col-sm-auto mb-3 d-flex align-items-sm-center">
              <div className="col-sm-auto text-xs-end text-md-center">
                  <TOC
                    allFilms={allFilms}
                    titleSelectedFilm={selectedFilm.title || "none"}
                    onSelectFilm={onSelectFilm}
                  />
              </div>

            </div>
            <div
              className="col text-xs-start text-md-center d-flex align-items-sm-center justify-content-center"
              style={{ minWidth: "20em" }}>
              {!selectedFilm.title && <div className="alert alert-warning align-items-center p-3 m-1 text-center" style={{ maxHeight: "4em" }}>Please select a film.</div>}
              {selectedFilm.title && (
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

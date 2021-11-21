import TOCItem from "./TOCItem";

export default function TOC(props: {
  allFilms: Array<{ title: string, episode_id: number, opening_crawl: string, created: string}>,
  titleSelectedFilm: string,
  onSelectFilm: any,
}) {
  const { allFilms, titleSelectedFilm, onSelectFilm } = props;

  return (
        <div
          className="btn-group-vertical gap-1"
          role="group"
          aria-label="TOC"
          data-testid="toc">
          {allFilms.map((item, index) => (
            <TOCItem
              key={item.created}
              index={index}
              title={item.title}
              titleSelectedFilm={titleSelectedFilm}
              onSelectFilm={(index: number) => onSelectFilm(index)}
            />
          ))}
        </div>
  );
}

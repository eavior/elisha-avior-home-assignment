import TOCItem from "./TOCItem";

export default function TOC(props) {
  const { allFilms } = props;
  console.log(allFilms);
  return (
    <>
      <h1>TOC</h1>
      <div>
        <div className="container">
          {allFilms.map((item) => (
            <TOCItem
              key={item.episode_id}
              title={item.title}
              episode={item.episode_id}
              // abstract={item.opening_crawl}
            />
          ))}
        </div>
      </div>
    </>
  );
}

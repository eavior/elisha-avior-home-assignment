import axios from "axios";

const BaseUrl = "https://swapi.dev/api/";

export async function getAllFilms() {
  try {
    const response = await axios.get(`${BaseUrl}/films/`);
    const filteredResults = filterObjectsInArray(response.data.results, [
      "title",
      "episode_id",
      "opening_crawl",
      "created",
    ]);
    const sortedResults = filteredResults.sort((a, b) =>
      b.episode_id > a.episode_id ? -1 : 1
    );
    return sortedResults;
  } catch (error) {
    const errorMessage = `Oops! Something went wrong - we were not able to retrieve the expected data. \nError message: ${JSON.stringify(
      error.message
    )}\nPlease try again by refreshing the page.`;
    alert(errorMessage);
  }
}

const filterObjectsInArray = (arr, selection) => {
  const filteredArray = [];
  arr.map((obj) => {
    const filteredObj = {};
    for (let key in obj) {
      if (selection.includes(key)) {
        filteredObj[key] = obj[key];
      }
    }
    filteredArray.push(filteredObj);
  });
  return filteredArray;
};

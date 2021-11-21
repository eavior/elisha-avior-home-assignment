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
    const sortedResults = filteredResults.sort((a: any, b: any) =>
      b.episode_id > a.episode_id ? -1 : 1
    );
    return sortedResults;
  } catch (error: any) {
    const errorMessage = `Oops! Something went wrong - we were not able to retrieve the expected data. \nError message: ${JSON.stringify(
      error.message
    )}\nPlease try again by refreshing the page.`;
    alert(errorMessage);
  }
}

const filterObjectsInArray = (
  arr: any,
  selection: Array<string>
) => {
  const filteredArray: any = [];
  arr.forEach((obj: any) => {
    const filteredObj: any = {};
    for (let key in obj) {
      if (selection.includes(key)) {
        filteredObj[key] = obj[key];
      }
    }
    filteredArray.push(filteredObj);
  });
  return filteredArray;
};

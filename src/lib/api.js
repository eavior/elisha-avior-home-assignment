import axios from "axios";

const BaseUrl = "https://swapi.dev/api/";

export async function getAllFilms() {
  try {
    const response = await axios.get(`${BaseUrl}/films/`);
    const sortedResults = response.data.results.sort((a, b) =>
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

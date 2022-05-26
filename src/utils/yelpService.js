const BASE_URL = "/api/yelp";

async function search(input) {
  let response = await fetch(`${BASE_URL}/search/${input.location}/${input.term}`);
  let data = await response.json();
  return data;
}

async function randomSearch(input) {
  let response = await fetch(`${BASE_URL}/random/${input.location}/${input.term}`);
  let data = await response.json();
  let random = await Math.floor(Math.random() * 50) + 1;
  return data.businesses[random];
}

const yelpService = {
  search,
  randomSearch,
};

export default yelpService;

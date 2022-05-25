const BASE_URL = "/api/yelp";

async function search(input) {
  console.log(input, "yelpService");
  
  let response = await fetch(`${BASE_URL}/search/${input.location}/${input.term}`);
  let data = await response.json();

  console.log(data);
  return data;
}

async function randomSearch(input) {
  console.log(input, "yelpService");
  
  let response = await fetch(`${BASE_URL}/random/${input.location}/${input.term}`);
  let data = await response.json();
  let random = await Math.floor(Math.random() * 20) + 1;
  console.log(data.businesses[random], 'random')
  return data.businesses[random];
}

const yelpService = {
  search,
  randomSearch,
  
};

export default yelpService;

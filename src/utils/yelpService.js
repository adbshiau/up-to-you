const BASE_URL = "/api/yelp";

async function search(input) {
  console.log(input, "yelpService");
  // return fetch(`${BASE_URL}/search/${input.location}/${input.term}`)
  // .then(response => response.text())
  // .then(data => console.log(data))
  let response = await fetch(`${BASE_URL}/search/${input.location}/${input.term}`);
  let data = await response.json();

  console.log(data);
  return data;
}

const yelpService = {
  search,
};

export default yelpService;

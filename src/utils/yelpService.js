const BASE_URL = "/api/yelp";

function search(input) {
  console.log(input, "yelpService");
  return fetch(`${BASE_URL}/search/${input.location}/${input.term}`);
}

const yelpService = {
  search,
};

export default yelpService;

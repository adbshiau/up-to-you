const rootURL = "https://api.yelp.com/v3/businesses/search?";
const key = process.env.YELP_API_KEY;
const axios = require("axios").default; // tool to talk to Yelp API

module.exports = {
  search,
  randomSearch,
};

function search(req, res) {
  // console.log('youre hitting the yelp controller!');
  // console.log(req.params.location, 'location')
  // console.log(req.params.term, 'term')
  const options = {
    method: "GET",
    url: `${rootURL}location=${req.params.location}&term=${req.params.term}&limit=10`,
    headers: {
      Authorization: "Bearer " + key,
    },
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, 'search function from yelpService');
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function randomSearch(req, res) {
    // console.log('youre hitting the yelp controller!');
    // console.log(req.params.location, 'location')
    // console.log(req.params.term, 'term')
    const options = {
      method: "GET",
      url: `${rootURL}location=${req.params.location}&term=${req.params.term}&limit=50`,
      headers: {
        Authorization: "Bearer " + key,
      },
    };
    try {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data, 'randomSearch from yelpService');
          res.status(200).json(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      return res.status(401).json(err);
    }
  }



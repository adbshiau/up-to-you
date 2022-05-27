const User = require("../models/user");
const Business = require("../models/business");
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");
const { findById } = require("../models/user");
const s3 = new S3();

module.exports = {
  create,
  allBusinesses,
  delete: deleteBusiness,
  show,
  index
};

async function create(req, res) {
  // console.log(req.body, 'business controller')
  try {
    const business = await Business.create({
      yelpId: req.body.yelpId,
      name: req.body.name,
      url: req.body.url,
      image_url: req.body.image_url,
      categories: req.body.categories,
      rating: req.body.rating,
      price: req.body.price,
      location: req.body.location,
      phone: req.body.phone,
      is_closed: req.body.is_closed,
      userFavorited: req.user,
    });
    await business.populate("userFavorited");
    res.status(201).json(business);
  } catch (err) {
    console.log(err, "err from create business controller");
    res.json({ data: err });
  }
}

async function allBusinesses(req, res) {
  try {
    const businesses = await Business.find({}).populate("userFavorited").exec();
    res.status(200).json({ businesses });
  } catch (err) {
    console.log(err, "err from index business controller");
  }
}

async function deleteBusiness(req, res) {
  console.log(req.params.id, req.user._id);
  try {
    const data = await Business.findOneAndDelete({
      _id: req.params.id,
      userFavorited: req.user._id,
    });
    res.status(200).json({ data });
  } catch (err) {
    console.log(err, "err from delete business controller");
  }
}

async function show(req, res) {
    try {
        const business = await Business.findOne({'_id': req.params.id});
        res.status(200).json(business);
    } catch (err) {
        console.log(err, "err from show business controller");
    }
}

async function index(req, res) {
    try {
        const businesses = await Business.find({'userFavorited': req.user._id});
        res.status(200).json(businesses);
    } catch (err) {
        console.log(err, "err from index business controller")
    }
}

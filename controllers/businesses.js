const User = require("../models/user");
const Business = require("../models/business");
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");
const s3 = new S3();

module.exports = {
  create,
  index,
  delete: deleteBusiness,
};

async function create(req, res) {
  // console.log(req.body, 'business controller')
  try {
    const business = await Business.create({
      yelpId: req.body.yelpId,
      businessName: req.body.businessName,
      yelpUrl: req.body.yelpUrl,
      imageUrl: req.body.imageUrl,
      userFavorited: req.user,
    });
    console.log(business, "create function in business controller");
    await business.populate("userFavorited");
    res.status(201).json({ business: business });
  } catch (err) {
    console.log(err, "err from business controller");
    res.json({ data: err });
  }
}

async function index(req, res) {
  console.log("index controller");
  try {
    const businesses = await Business.find({}).populate("userFavorited").exec();
    res.status(200).json({ businesses });
  } catch (err) {
    console.log(err, "err from index function");
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
    console.log(err, "err from delete function");
  }
}

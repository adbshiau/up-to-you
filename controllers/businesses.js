const User = require("../models/user");
const Business = require("../models/business");
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const s3 = new S3();

module.exports = {
    create,
};

async function create(req, res) {
    // console.log(req.body, 'business controller')
    try {
        const business = await Business.create({
           yelpId: req.body.yelpId,
           businessName: req.body.businessName,
           yelpUrl: req.body.yelpUrl,
           imageUrl: req.body.imageUrl,
           user: req.user 
        })
        console.log(business, 'create function in business controller')
        await business.populate('user');
        res.status(201).json({business: business})
    } catch (err) {
        console.log(err, 'err from business controller')
        res.json({data: err})
    }
    
}
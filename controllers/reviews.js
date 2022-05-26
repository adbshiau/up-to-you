const User = require("../models/user");
const Business = require("../models/business");
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");
const { post } = require("request");
const s3 = new S3();

module.exports = {
    create,
    delete: deleteReview,
    
};

async function create(req, res) {
    console.log(req.params.id, 'reviews create function!')
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data) {
            console.log(data, 'data from aws reviews controller')
            const business = await Business.findById(req.params.id);
            business.reviews.push({
                text: req.body.text,
                stars: req.body.stars,
                username: req.user.username,
                businessId: req.params.id,
                photoUrl: data.Location,
                userId: req.user._id
            })
            await business.save()
            console.log(business, 'business')
            res.status(201).json(business)
        })
    } catch (err) {
        console.log(err)
        res.json({review: err})
    }
}

async function deleteReview(req, res) {
    console.log(req.user.username, 'delete review function!')
    try {
        const business = await Business.findOne({'reviews._id': req.params.id, 'reviews.userId': req.user._id})
        business.reviews.remove(req.params.id)
        console.log(business, 'business in delete review function')
        await business.save()
        res.json({business: business})
    } catch (err) {
        res.status(400).json({err})
    }
}
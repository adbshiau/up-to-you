const User = require("../models/user");
const Business = require("../models/business");
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");
const s3 = new S3();

module.exports = {
    create,
    
};

async function create(req, res) {
    console.log('reviews create function!')
}
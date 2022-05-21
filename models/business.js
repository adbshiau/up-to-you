const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema(
  {
    username: String,
    businessName: String,
    userId: { type: mongoose.Schema.Types.ObjectId },
    businessId: { type: mongoose.Schema.Types.ObjectId },
    text: String,
    stars: Number,
  },
  {
    timestamps: true,
  }
);

const favoritesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

// A business has many favorites. A favorite belongs to a business.
// A business has many reviews. A review belongs to a business.
const businessSchema = new mongoose.Schema({
  yelpId: String,
  businessName: String,
  yelpUrl: String,
  imageUrl: String,
  categories: [String],
  rating: Number,
  price: String,
  location: String,
  phone: Number,
  open_now: Boolean,
//   userFavorited: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  favorites: [favoritesSchema], // embedded the favorites schema
  reviews: [reviewsSchema], // embedded the reviews schema
});

module.exports = mongoose.model("Business", businessSchema);

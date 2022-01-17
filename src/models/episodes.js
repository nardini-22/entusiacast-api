const mongoose = require("../database");

const EpisodesSchema = new mongoose.Schema({
  id_ep: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  members: {
    type: String,
    required: true,
  },
  published_at: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  highlighted: {
    type: Boolean,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
});

const Episodes = mongoose.model("Episodes", EpisodesSchema);

module.exports = Episodes;

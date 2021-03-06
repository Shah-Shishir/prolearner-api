const mongoose = require("mongoose");

const LanguageSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  concepts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Concept",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Language", LanguageSchema);

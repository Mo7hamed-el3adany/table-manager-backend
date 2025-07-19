const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  item: { type: String, required: true },
  status: { type: String, required: true },
  remark: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model('Record', recordSchema);

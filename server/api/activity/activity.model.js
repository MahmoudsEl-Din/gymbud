'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  title: {
    type: String,
    required:true
  },
  story: {
    type: String,
    required:true
  },
  active: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateModified: Date,
  _author: {
    type:Schema.Types.ObjectId,
    ref:'user'
  }
});

module.exports = mongoose.model('Activity', ActivitySchema);
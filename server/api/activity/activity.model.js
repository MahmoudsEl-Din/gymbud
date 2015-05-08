'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  title: {
    type: String,
    required:true
  },
  labels: [
    {
      type: String,
      required: true
    }
  ],
  description: {
    type: String,
    required:true
  },
  active: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateModified: Date,
  attending:[
    {
      type:Schema.Types.ObjectId,
      ref:'User'
    }
  ],
  _author: {
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  location: {
    latitude: Number,
    longitude: Number
  },
  time: {
    type: Date,
    required:true
  }
});

module.exports = mongoose.model('Activity', ActivitySchema);
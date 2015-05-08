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
      ref:'user'
    }
  ],
  _author: {
    type:Schema.Types.ObjectId,
    ref:'user',
    required: true
  }
});

module.exports = mongoose.model('Activity', ActivitySchema);
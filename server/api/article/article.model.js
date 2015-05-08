'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  labels: [
    {
      type: String,
      required: true
    }
  ],
  active: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateModified: Date,
  _author: {
    type: Schema.Types.ObjectId,
    ref:'user',
    required: true
  },
  starred: [
    {
      type:Schema.Types.ObjectId,
      ref:'user'
    }
  ],
  read: [
    {
      type:Schema.Types.ObjectId,
      ref:'user'
    }
  ]
});

module.exports = mongoose.model('Article', ArticleSchema);
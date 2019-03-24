'use strict';

const mongooseFindAndFilter = require('mongoose-find-and-filter');
 
const userSchema = new Schema({...});
 
// attach mongoose-find-and-filter plugin to userSchema
userSchema.plugin(mongooseFindAndFilter);

const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
Ques1: {
    type : String,
    required : true,
},
Ques2: {
    type : String,
    required : true,
},
Ques3: {
    type : String,
    required : true,
},
Comment: {
    type : String,
    required : true,
},

});

//Hashing
// userSchema.pre('save', async function(next){
//     if(this.isModified('mobile_no')){
//         this.mobile_no = bcryptjs.hashSync(this.mobile_no, 10);
//     }
//     next();
// });

//Create Model
const Users = new mongoose.model("temp", userSchema);

module.exports = Users;
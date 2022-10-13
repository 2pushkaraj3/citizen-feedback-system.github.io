const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
   
const app = express();

dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

const Users = require('./models/userSchema');

//this method is used to get data and cookie from frontend
app.use(express.json());  
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors());

app.post('/feedbackcitizen',async (req, res) =>{
    try {
        const Ques1 = req.body.ques1_ans;
        const Ques2 = req.body.ques2_ans;
        const Ques3 = req.body.ques3_ans;
        const Comment = req.body.Comment;

        const createUser = new Users({
          Ques1 : Ques1,
          Ques2 : Ques2,
          Ques3 : Ques3,
          Comment : Comment,
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("submitted");

    } catch (error) {
        res.status(400).send(error);
    }
})


app.get('/', (req, res) => {
    res.send('Hello world')
});

app.listen(port, ()=>{
    console.log("Server is Running Successfully.")
});
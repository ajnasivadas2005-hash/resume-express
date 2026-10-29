const express = require('express');
const app = express();
const mangoose = require('mongoose');

mongoose.conneect('mongodb://localhost/my_db:27017',{
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
const personalSchema = new mongoose.Schema({
    name:String,
    age:Number,
    nationality:String
});

const person = mongoose.model('person', personalschema);
app.get('/person',async (req,res) => {
    try{
        const people = await person.find();
        res.send(people);
    } catch(err){
        console.error(err);
        res.status(500).send('Error fetching people');

    }
});
app.listen(4000,() => {
    console.log('Server is running on port 4000');
}); 
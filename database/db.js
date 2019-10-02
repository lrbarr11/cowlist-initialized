const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => { console.log('connection successful')});

const cowSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Cows = mongoose.model('Cows', cowSchema);

const newCow = (cow) => {
    var moo = new Cows({name: cow.name, description: cow.description});
    return moo.save()
}

const getCows = () => {
    return Cows.find()
               .exec()
}

const removeCow = (cow) => {
   return Cows.findByIdAndDelete(cow._id).exec()
    
}


const cowMods = (cow) => {
   return Cows.findByIdAndUpdate({_id: cow._id}, {name: cow.name, description: cow.description}, {new: true}).exec()
    
}

module.exports.cowMods = cowMods;
module.exports.removeCow = removeCow;
module.exports.newCow = newCow;
module.exports.getCows = getCows;
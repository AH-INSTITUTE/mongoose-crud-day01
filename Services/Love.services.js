const Love = require('../models/Love.model');

const LoveServices = {};

//post Data
LoveServices.postData = love => {
    return Love.create(love);
};

//get All Data
LoveServices.getAllData = () => {
    return Love.find();
    // return "Abu Hasan Services";
};

// //get By Id
// shopServices.getById = id => {
//     // console.log(id);
//     return Shop.findById({ _id: id });
// }

// //patch By Id
// shopServices.patchById = reqBody => {
//     const id = reqBody._id;
//     // console.log(id);
//     return Shop.findByIdAndUpdate({ _id: id }, reqBody, { new: true });
// };

// //put By Id
// shopServices.putById = reqBody => {
//     const id = reqBody._id;
//     return Shop.findOneAndReplace({ _id: id }, reqBody, { new: true });
// };

// //delete By Id
// shopServices.deleteById = reqBody => {
//     const id = reqBody._id;
//     return Shop.findByIdAndDelete({ _id: id });
// };

module.exports = LoveServices;
const Shop = require('../models/Shop.models');

const shopServices = {};

//post Data
shopServices.postData = shop => {
    return Shop.create(shop);
};

//get All Data
shopServices.getAllData = () => {
    return Shop.find();
};

//get By Id
shopServices.getById = id => {
    // console.log(id);
    return Shop.findById({ _id: id });
}

//patch By Id
shopServices.patchById = reqBody => {
    const id = reqBody._id;
    // console.log(id);
    return Shop.findByIdAndUpdate({ _id: id }, reqBody, { new: true });
};

//put By Id
shopServices.putById = reqBody => {
    const id = reqBody._id;
    return Shop.findOneAndReplace({ _id: id }, reqBody, { new: true });
};


//delete By Id
shopServices.deleteById = reqBody => {
    const id = reqBody._id;
    return Shop.findByIdAndDelete({ _id: id });
};

module.exports = shopServices;
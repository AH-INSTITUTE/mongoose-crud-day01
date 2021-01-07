const shopServices = require('../Services/Shop.service');
const shopController = {};

//common function for all try and catch. I am try to maintain DRY Principal.
async function commonParams(res, callBackFunc){
    try {
        const shop = await callBackFunc();
        return res.status(200).json(shop);
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({message: 'OPPS!!! there are some problem.'});
    };
};

//post data
shopController.postData = async (req, res, next) => {
    commonParams(res, () => shopServices.postData(req.body));
    // console.log(req.body);
};

//get All Data
shopController.getAllData = async (req, res, next) => {
    commonParams(res, () => shopServices.getAllData());
};

//get By Id
shopController.getById = async (req, res, next) => {
    commonParams(res, () => shopServices.getById(req.query.id));
    // console.log(req.query.id);
};

//patch By Id
shopController.patchById = async (req, res, next) => {
    commonParams(res, () => shopServices.patchById(req.body));
    // console.log(req.body);
};

//put By Id
shopController.putById = async (req, res, next) => {
    commonParams(res, () => shopServices.putById(req.body));
};

//delete By Id
shopController.deleteById = async (req, res, next) => {
    commonParams(res, () => shopServices.deleteById(req.body));
};

module.exports =  shopController;
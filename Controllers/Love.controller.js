const LoveServices = require('../Services/Love.services');
const loveController = {};

//common function for all try and catch. I am try to maintain DRY Principal.
async function commonParams(res, CallbackFunc) {
    try {
        const love = await CallbackFunc();
        return res.status(200).json(love);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'OPS!!! there are some problem With Your Love.' });
    }
}


//post data
loveController.postData = async (req, res, next) => {
    commonParams(res, () => LoveServices.postData(req.body));
    // console.log(req.body);
};

//get All Data
loveController.getAllData = async (req, res, next) => {
    // res.send("Abu Hasan controller");
    commonParams(res, () => LoveServices.getAllData());
};

// //get By Id
// shopController.getById = async (req, res, next) => {
//     commonParams(res, () => shopServices.getById(req.query.id));
//     // console.log(req.query.id);
// };

// //patch By Id
// shopController.patchById = async (req, res, next) => {
//     commonParams(res, () => shopServices.patchById(req.body));
//     // console.log(req.body);
// };

// //put By Id
// shopController.putById = async (req, res, next) => {
//     commonParams(res, () => shopServices.putById(req.body));
// };

// //delete By Id
// shopController.deleteById = async (req, res, next) => {
//     commonParams(res, () => shopServices.deleteById(req.body));
// };

module.exports  = loveController;
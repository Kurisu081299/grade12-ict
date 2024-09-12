const userModel = require ('../Model/userModel');
const userController = {};

userController.getData = (req, res) => {
    userModel.getDataModel ((error, getData)=> {
        if (error){
            console.error("Error getting data. Error: ", error);
            return res.status(500).json({message: "Error Getting Data"});
        }
        return res.status (200).json({message: "Data retrieved successfully", data: getData});
    });
};

module.exports = userController;
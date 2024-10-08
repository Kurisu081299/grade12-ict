const userModel = require ('../model/userModel');
const userController = {};

userController.getData = (req, res) => {
    userModel.getDataModel((error, getData)=> {
        if (error){
            console.error("Error getting data. Error: ", error);
            return res.status(500).json({message: "Error Getting Data"});
        }
        return res.status(200).json({message: "Data Retrieved successfully", data: getData});
    });
};

userController.postData = (req, res) => {
    const {name, address, age} = req.body;

    const data = {name, address, age};

    userModel.postData (data, (error,result) => {
        if (error){
            console.error("Error inserting data.", error);
            return res.status(500).json({ message: "Error inserting data"});
        }
        return res.status(200).json ({ message: "Data Inserted Successfully"});
    });
}

module.exports = userController;
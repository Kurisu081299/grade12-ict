const dbConn = require("../Config/db.config");
const userModel = {};

userModel.getDataModel = (callback) => {
    dbConn.query("SELECT * FROM grade12_tb", (error, result) => {
        if (error){
            console.error("Error getting data. Data: ", error);
            return callback(error,null);
        }
        return callback(null,result);
    });
};

module.exports = userModel;
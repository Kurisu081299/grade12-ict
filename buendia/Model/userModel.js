const dbConn = require("../Config/db.config");
const userModel = {};

userModel.getDataModel = (callback) => {
    dbConn.query("SELECT * FROM buendia_tb", (error, result) => {
        if (error){
            console.error("Error getting data. Data: ", error);
            return callback(error,null);
        }
        return callback(null,result);
    });
};

userModel.postData = (data, callback) =>{
    dbConn.query("INSERT INTO buendia_tb (name, address, age) VALUES (?, ?, ?)", [data.name, data.address, data.age], (error, result) => {
        if (error){
            console.error("Error inserting data. Data: ", error);
            return callback(error,null);
            }
            return callback(null,result);
    });
}

module.exports = userModel;
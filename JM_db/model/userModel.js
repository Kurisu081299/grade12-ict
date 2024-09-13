const dbConn = require("../config/db.config");
const userModel = {};

userModel.getDataModel = (callback) => {
    dbConn.query("SELECT * FROM jei_table_1", (error,result) => {
        if(error){
            console.error("Error getting data: Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};

userModel.postData = (data, callback) =>{
    dbConn.query("INSERT INTO jei_table_1 (name, address, age) VALUES (?, ?, ?)", [data.name, data.address, data.age], (error,result) => {
        if(error){
            console.error ("Error inserting data. ", error);
            return callback (error, null);
        }
        return callback(null, result);
    });
}
module.exports = userModel
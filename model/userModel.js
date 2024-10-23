const dbConn = require("../config/db.config");
const userModel = {};

userModel.getDataModel = (callback) => {
    dbConn.query("SELECT * FROM quiz_tbl", (error,result) => {
        if(error){
            console.error("Error getting data: Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};

userModel.postData = (data, callback) =>{
    dbConn.query("INSERT INTO quiz_tbl (name, age) VALUES (?, ?)", [data.name, data.age], (error,result) => {
        if(error){
            console.error ("Error inserting data. ", error);
            return callback (error, null);
        }
        return callback(null, result);
    });
}
userModel.updateData = (id, data, callback) => {
    dbConn.query(
      "UPDATE quiz_tbl SET name=?, age=? WHERE id=?",
      [data.name, data.age, id],
      (error, result) => {
        if (error) {
          console.error("Error updating data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
  userModel.deleteData = (idsToDelete, callback) => {
    const query = "DELETE FROM quiz_tbl WHERE id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
module.exports = userModel
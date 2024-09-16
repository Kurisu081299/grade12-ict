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
userModel.updateData = (id, data, callback) => {
    dbConn.query(
      "UPDATE jei_table_1 SET name=?, age=?, address=? WHERE id=?",
      [data.name, data.age, data.address, id],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 11 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
  userModel.deleteData = (idsToDelete, callback) => {
    const query = "DELETE FROM jei_table_1 WHERE id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting grade 11 data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
module.exports = userModel
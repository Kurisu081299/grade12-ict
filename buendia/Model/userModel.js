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

userModel.updateData = (id, data, callback) => {
    dbConn.query(
      "UPDATE buendia_tb SET name=?, age=?, address=? WHERE id=?",
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
    const query = "DELETE FROM buendia_tb WHERE id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting grade 11 data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

module.exports = userModel;
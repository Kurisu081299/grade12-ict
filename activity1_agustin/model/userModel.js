const dbConn = require("../config/config");
const userModel = {};

    userModel.getDataModel = (callback) => {
    dbConn.query("SELECT * FROM jeishan_table_1", (error, result) => {
        if (error){
            console.error("Error getting Products. Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};
    userModel.postUser = (data, callback) =>{
    dbConn.query("INSERT INTO jeishan_table_1 (item_name, price, description) VALUES (?, ?, ?)", [data.item_name, data.price, data.description], (error, result) => {
    if (error){
        console.error ("Error inserting customer.", error);
        return callback (error, null);
        }
        return callback(null,result);
    });
}
    userModel.putUser = (customer_id, data, callback) => {
    dbConn.query(
      "UPDATE jeishan_table_1 SET item_name=?, price=?, description=?, WHERE customer_id=?",
      [data.item_name, data.price, data.description],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 12 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
    userModel.deleteUser = (idsToDelete, callback) => {
    const query = "DELETE FROM jeishan_table_1 WHERE customer_id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting product: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

module.exports = userModel;
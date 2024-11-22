const dbConn = require("../config/db.config");
const cashierModel = {};

cashierModel.getCashier = (callback) => {
    dbConn.query("SELECT * FROM cashier_table_1", (error, result) => {
        if (error){
            console.error("Error getting Products. Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};

cashierModel.postCashier = (data, callback) =>{
    dbConn.query("INSERT INTO cashier_table_1 (name, role) VALUES (?, ?)", [data.name, data.role], (error, result) => {
    if (error){
        console.error ("Error inserting customer.", error);
        return callback (error, null);
        }
        return callback(null,result);
    });
}

cashierModel.putCashier = (cashier_id, data, callback) => {
    dbConn.query(
      "UPDATE cashier_table_1 SET name=?, role=? WHERE cashier_id=?",
      [data.name, data.role, cashier_id],
      (error, result) => {
        if (error) {
          console.error("Error updating store data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };

  cashierModel.deleteCashier = (idsToDelete, callback) => {
    const query = "DELETE FROM cashier_table_1 WHERE cashier_table_1 = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting product: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };


module.exports = cashierModel;
const dbConn = require("../config/db.config");
const customerModel = {};

customerModel.getCustomer = (callback) => {
    dbConn.query("SELECT * FROM customer_table_2", (error, result) => {
        if (error){
            console.error("Error getting Products. Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};

customerModel.postCustomer = (data, callback) =>{
    dbConn.query("INSERT INTO customer_table_2 (name, email, phone, address) VALUES (?, ?, ?, ?)", [data.name, data.email, data.phone, data.address], (error, result) => {
    if (error){
        console.error ("Error inserting customer.", error);
        return callback (error, null);
        }
        return callback(null,result);
    });
}

customerModel.putCustomer = (customer_id, data, callback) => {
    dbConn.query(
      "UPDATE customer_table_2 SET name=?, email=?, phone=?, address=? WHERE customer_id=?",
      [data.name, data.email, data.phone, data.address, customer_id],
      (error, result) => {
        if (error) {
          console.error("Error updating store data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };

  customerModel.deleteCustomer = (idsToDelete, callback) => {
    const query = "DELETE FROM customer_table_2 WHERE customer_table_2 = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting product: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };


module.exports = customerModel;
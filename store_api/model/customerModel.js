const dbConn = require("../config/db.config");
const customerModel = {};

customerModel.getCustomer = (callback) => {
    dbConn.query("SELECT * FROM customer_tbl", (error, result) => {
        if (error){
            console.error("Error getting Products. Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};

customerModel.postCustomer = (data, callback) =>{
    dbConn.query("INSERT INTO customer_tbl (name, email, phone, address) VALUES (?, ?, ?, ?)", [data.name, data.email, data.phone, data.address], (error, result) => {
    if (error){
        console.error ("Error inserting customer.", error);
        return callback (error, null);
        }
        return callback(null,result);
    });
}

customerModel.putCustomer = (customer_id, data, callback) => {
    dbConn.query(
      "UPDATE customer_tbl SET name=?, email=?, phone=?, address=? WHERE customer_id=?",
      [data.name, data.email, data.phone, data.address, customer_id],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 11 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };

  customerModel.deleteCustomer = (idsToDelete, callback) => {
    const query = "DELETE FROM customer_tbl WHERE customer_id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting product: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };


module.exports = customerModel;
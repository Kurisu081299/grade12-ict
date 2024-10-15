const dbConn = require("../config/config");
const productModel = {};

    productModel.getUser = (callback) => {
    dbConn.query("SELECT * FROM jeishan_table_2", (error, result) => {
        if (error){
            console.error("Error getting Products. Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};
    productModel.postUser = (data, callback) =>{
    dbConn.query("INSERT INTO jeishan_table_2(stock_number, store_number) VALUES (?, ?, ?, ?)", [data.stock_number, store_number], (error, result) => {
    if (error){
        console.error ("Error inserting customer.", error);
        return callback (error, null);
        }
        return callback(null,result);
    });
}
    productModel.putUser = (product_id, data, callback) => {
    dbConn.query(
      "UPDATE jeishan_table_2 SET stock_number=?, store_number=?, WHERE customer_id=?",
      [data.stock_number, data.store_number],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 12 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
    productModel.deleteUser = (idsToDelete, callback) => {
    const query = "DELETE FROM jeishan_table_2 WHERE customer_id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting product: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

module.exports = productModel;
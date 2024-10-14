const dbConn = require("../Config/db.config");
const userModel = {};

userModel.getStoresModel = (callback) => {
    dbConn.query("SELECT * FROM stores_tbl", (error, result) => {
        if (error){
            console.error("Error getting data. Data: ", error);
            return callback(error,null);
        }
        return callback(null,result);
    });
};

userModel.getProductsModel = (callback) => {
    dbConn.query("SELECT * FROM products_tbl", (error, result) => {
        if (error){
            console.error("Error getting data. Data: ", error);
            return callback(error,null);
        }
        return callback(null,result);
    });
};

//POST

userModel.postStores = (data, callback) =>{
    dbConn.query("INSERT INTO stores_tbl (store_name, stock_number) VALUES (?, ?)", [data.store_name, data.stock_number], (error, result) => {
        if (error){
            console.error("Error inserting data. Data: ", error);
            return callback(error,null);
            }
            return callback(null,result);
    });
}

userModel.postProducts = (data, callback) =>{
    dbConn.query("INSERT INTO products_tbl (item_name, price, description) VALUES (?, ?, ?)", [data.item_name, data.price, data.description], (error, result) => {
        if (error){
            console.error("Error inserting data. Data: ", error);
            return callback(error,null);
            }
            return callback(null,result);
    });
}

//UPDATE


userModel.updateProducts = (id, data, callback) => {
    dbConn.query(
      "UPDATE products_tbl SET item_name=?, price=?, description=?, WHERE id = ?",
      [data.item_name, data.price, data.description, id],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 12 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };

  userModel.updateStores = (id, data, callback) => {
    dbConn.query(
      "UPDATE stores_tbl SET store_name=?, stock_number=?, WHERE id = ?",
      [data.store_name, data.stock_number,],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 12 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };


  //DELETE


  userModel.deleteProducts = (idsToDelete, callback) => {
    const query = "DELETE FROM products_tbl WHERE id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting grade 11 data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

module.exports = userModel;

userModel.deleteStores = (idsToDelete, callback) => {
    const query = "DELETE FROM stores_tbl WHERE id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting grade 11 data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

module.exports = userModel;
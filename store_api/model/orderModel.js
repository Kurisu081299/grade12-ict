const dbConn = require("../config/db.config");
const orderModel = {};

orderModel.getOrders = (callback) => {
    dbConn.query("SELECT * FROM orders", (error, result) => {
        if (error){
            console.error("Error getting Products. Data: ", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
};

// orderModel.postOrders = (data, callback) =>{
//     dbConn.query("INSERT INTO orders (products_id, customers_id, cashiers_id, amount, status) VALUES (?, ?, ?, ?, ?)", [data.products_id, data.customers_id, data.cashiers_id, data.amount, data.status], (error, result) => {
//     if (error){
//         console.error ("Error inserting customer.", error);
//         return callback (error, null);
//         }
//         return callback(null,result);
//     });
// }

orderModel.checkIds = (products_id, customers_id, cashiers_id, callback) => {
    const productQuery = "SELECT 1 FROM products_tbl WHERE product_id = ?";
    const customerQuery = "SELECT 1 FROM customer_tbl WHERE customer_id = ?";
    const cashierQuery = "SELECT 1 FROM cashier_tbl WHERE cashier_id = ?";

    dbConn.query(productQuery, [products_id], (error, productResult) => {
        if (error) return callback(error, null);

        dbConn.query(customerQuery, [customers_id], (error, customerResult) => {
            if (error) return callback(error, null);

            dbConn.query(cashierQuery, [cashiers_id], (error, cashierResult) => {
                if (error) return callback(error, null);

                const existCheck = {
                    productExists: productResult.length > 0,
                    customerExists: customerResult.length > 0,
                    cashierExists: cashierResult.length > 0
                };

                return callback(null, existCheck);
            });
        });
    });
};

// Fetch product price and name based on product_id
orderModel.checkProductPrice = (products_id, callback) => {
    const query = "SELECT price, name FROM products_tbl WHERE product_id = ?";
    dbConn.query(query, [products_id], (error, result) => {
        if (error) return callback(error, null);
        if (result.length === 0) return callback(null, null);

        return callback(null, { price: result[0].price, name: result[0].name });
    });
};

// Fetch customer and cashier details
orderModel.getCustomerAndCashierDetails = (customers_id, cashiers_id, callback) => {
    const customerQuery = "SELECT name FROM customer_tbl WHERE customer_id = ?";
    const cashierQuery = "SELECT name FROM cashier_tbl WHERE cashier_id = ?";

    dbConn.query(customerQuery, [customers_id], (error, customerResult) => {
        if (error) return callback(error, null);

        dbConn.query(cashierQuery, [cashiers_id], (error, cashierResult) => {
            if (error) return callback(error, null);

            const details = {
                customerName: customerResult[0].name,
                cashierName: cashierResult[0].name
            };

            return callback(null, details);
        });
    });
};

// Insert order with change
orderModel.postOrders = (orderData, callback) => {
    const query = "INSERT INTO orders (products_id, customers_id, cashiers_id, amount, status, `change`) VALUES (?, ?, ?, ?, ?, ?)";
    dbConn.query(query, [orderData.products_id, orderData.customers_id, orderData.cashiers_id, orderData.amount, orderData.status, orderData.change], (error, result) => {
        if (error) {
            console.error("Error inserting order.", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};


orderModel.updateStatus = (id, data, callback) => {
    dbConn.query(
      "UPDATE orders SET status=? WHERE id=?",
      [data.status, id],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 11 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };


module.exports = orderModel;
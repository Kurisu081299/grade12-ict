const dbConn = require("../config/db.config");
const purchaseModel = {}; 

purchaseModel.getOrders = (callback) => {
    dbConn.query("SELECT * FROM orders", (error, result) => {
        if (error) {
            console.error("Error getting orders: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

    purchaseModel.checkIds = (products_id, customers_id, cashiers_id, callback) => {
        const productQuery = "SELECT 1 FROM purchase_table_3 WHERE product_id = ?";
        const customerQuery = "SELECT 1 FROM customer_table_2 WHERE customer_id = ?";
        const cashierQuery = "SELECT 1 FROM cashier_table_1 WHERE cashier_id = ?";

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

    purchaseModel.checkProductPrice = (products_id, callback) => {
        const query = "SELECT price, name FROM purchase_table_3 WHERE product_id = ?";
        dbConn.query(query, [products_id], (error, result) => {
            if (error) return callback(error, null);
            if (result.length === 0) return callback(null, null);

            return callback(null, { price: result[0].price, name: result[0].name });
    });
};

    purchaseModel.getCustomerAndCashierDetails = (customers_id, cashiers_id, callback) => {
        const customerQuery = "SELECT name FROM customer_table_2 WHERE customer_id = ?";
        const cashierQuery = "SELECT name FROM cashier_table_1 WHERE cashier_id = ?";

        dbConn.query(customerQuery, [customers_id], (error, customerResult) => {
            if (error) return callback(error, null);
            if (customerResult.length === 0) return callback(null, { customerName: null });

            dbConn.query(cashierQuery, [cashiers_id], (error, cashierResult) => {
                if (error) return callback(error, null);
                if (cashierResult.length === 0) return callback(null, { cashierName: null });

                const details = {
                    customerName: customerResult[0].name,
                    cashierName: cashierResult[0].name
                };

                return callback(null, details);
        });
    });
};

    purchaseModel.postOrders = (orderData, callback) => {
        const query = "INSERT INTO orders (products_id, customers_id, cashiers_id, amount, status, `change`) VALUES (?, ?, ?, ?, ?, ?)";
        dbConn.query(query, [orderData.products_id, orderData.customers_id, orderData.cashiers_id, orderData.amount, orderData.status, orderData.change], (error, result) => {
            if (error) {
                console.error("Error inserting order.", error);
                return callback(error, null);
            }
            return callback(null, result);
        });
    };

    purchaseModel.updateStatus = (id, data, callback) => {
        dbConn.query(
        "UPDATE orders SET status=? WHERE id=?",
        [data.status, id],
        (error, result) => {
            if (error) {
            console.error("Error updating order status: ", error);
            return callback(error, null);
            }
    
            return callback(null, result);
        }
        );
};

module.exports = purchaseModel;
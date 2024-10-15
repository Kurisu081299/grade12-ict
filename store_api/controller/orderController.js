const orderModel = require ('../model/orderModel.js');
const orderController = {};

orderController.getOrders = (req, res) => {
    orderModel.getOrders((error, getData)=> {
        if (error){
            console.error("Error getting Products. Error: ", error);
            return res.status(500).json({message: "Error Getting Products"});
        }
        return res.status(200).json({message: "Products Retrieved successfully", data: getData});
    });
};

// orderController.postOrders = (req, res) => {
//     const {products_id, customers_id, cashiers_id, amount, status} = req.body;

//     const data = {products_id, customers_id, cashiers_id, amount, status};

//     orderModel.postOrders(data, (error,result) => {
//         if (error){
//             console.error("Error purchasing.", error);
//             return res.status(500).json({ message: "Error purchasing"});
//         }
//         return res.status(200).json ({ message: "Purchased Successfully"});
//     });
// }

orderController.postOrders = (req, res) => {
    const { products_id, customers_id, cashiers_id, amount, status } = req.body;

    // Check if product, customer, and cashier exist
    orderModel.checkIds(products_id, customers_id, cashiers_id, (error, existCheck) => {
        if (error) {
            console.error("Error checking IDs.", error);
            return res.status(500).json({ message: "Error checking IDs" });
        }

        if (!existCheck.productExists || !existCheck.customerExists || !existCheck.cashierExists) {
            return res.status(400).json({
                message: "Please check if product_id, customer_id, and cashier_id exist"
            });
        }

        // Check the price of the product and compare with the amount
        orderModel.checkProductPrice(products_id, (error, productDetails) => {
            if (error) {
                console.error("Error fetching product details.", error);
                return res.status(500).json({ message: "Error fetching product details" });
            }

            const productPrice = productDetails.price;
            const productName = productDetails.name;

            if (amount < productPrice) {
                return res.status(400).json({ message: "Insufficient amount" });
            }

            // Calculate change
            const change = amount - productPrice;

            // Insert the order and return detailed success response
            const orderData = { products_id, customers_id, cashiers_id, amount, status, change };

            orderModel.postOrders(orderData, (error, result) => {
                if (error) {
                    console.error("Error purchasing.", error);
                    return res.status(500).json({ message: "Error purchasing" });
                }

                // Retrieve cashier and customer details
                orderModel.getCustomerAndCashierDetails(customers_id, cashiers_id, (error, details) => {
                    if (error) {
                        console.error("Error fetching customer or cashier details.", error);
                        return res.status(500).json({ message: "Error fetching customer or cashier details" });
                    }

                    // Success response
                    return res.status(200).json({
                        message: "Successful Purchase",
                        Cashier: details.cashierName,
                        Customer: details.customerName,
                        Item: productName,
                        Price: productPrice,
                        Amount: amount,
                        Change: change,
                        Status: status
                    });
                });
            });
        });
    });
};



orderController.updateStatus = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const {status} = req.body;
  
    // Check if required fields are provided
    if (!id || !status) {
      return res.status(400).json({ message: "Please provide id, and status" });
    }
  
    const data = { status};
  
    // Call the model to update grade 11 data
    orderModel.updateStatus(id, data, (error, result) => {
      if (error) {
        console.error("Error updating status: ", error);
        return res.status(500).json({ message: "Error updating status" });
      }
  
      return res.status(200).json({ message: "Status updated successfully" });
    });
  };


module.exports = orderController;
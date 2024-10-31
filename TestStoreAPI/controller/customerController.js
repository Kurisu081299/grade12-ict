const customerModel = require ('../model/customerModel');
const customerController = {};
    // CUSTOMER GET
 customerController.getCashier = (req, res) => {
 customerModel.getCashier((error, getData)=> {
        if (error){
            console.error("Error getting Products. Error: ", error);
            return res.status(500).json({message: "Error Getting Products"});
        }
        return res.status(200).json({message: "Products Retrieved successfully", data: getData});
    });
};

customerController.postCashier = (req, res) => {
    const {name, email, address, phone} = req.body;

    const data = {name, email, address, phone};
    // CUSTOMER POST
    customerModel.postCashier(data, (error,result) => {
        if (error){
            console.error("Error inserting customer.", error);
            return res.status(500).json({ message: "Error inserting customer"});
        }
        return res.status(200).json ({ message: "Customer Inserted Successfully"});
    });
}

customerController.putCashier = (req, res) => {
    const { customer_id } = req.body; // Get id from URL params
    const {name, email, address, phone} = req.body;
  
    // Check if required fields are provided
    if (!name || !email || !address || !phone) {
      return res.status(400).json({ message: "Please provide customer_id, name, email, address, phone" });
    }
  
    const data = { name, role };
  
    // CUSTOMER UPDATE
    customerModel.putCashier(cashier_id, data, (error, result) => {
      if (error) {
        console.error("Error updating cashier: ", error);
        return res.status(500).json({ message: "Error updating cashier" });
      }
  
      return res.status(200).json({ message: "Cashier updated successfully" });
    });
  };
    // CUSTOMER DELETE

  cashierController.deleteCashier = (req, res) => {
    const idsToDelete = req.body.cashier_id; 
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    cashierModel.deleteCashier(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting cashier: ", error);
        return res.status(500).json({ message: "Error deleting cashier" });
      }
  
      return res.status(200).json({ message: "Cashier deleted successfully", deletedCount: result.affectedRows });
    });
  };


module.exports = cashierController;
const customerModel = require ('../model/customerModel');
const customerController = {};
    // CUSTOMER GET
 customerController.getCustomer = (req, res) => {
 customerModel.getCustomer((error, getData)=> {
        if (error){
            console.error("Error getting customer. Error: ", error);
            return res.status(500).json({message: "Error Getting Customer"});
        }
        return res.status(200).json({message: "Customer Retrieved successfully", data: getData});
    });
};

customerController.postCustomer = (req, res) => {
    const {name, email, address, phone} = req.body;

    const data = {name, email, address, phone};
    // CUSTOMER POST
    customerModel.postCustomer(data, (error,result) => {
        if (error){
            console.error("Error inserting customer.", error);
            return res.status(500).json({ message: "Error inserting customer"});
        }
        return res.status(200).json ({ message: "Customer Inserted Successfully"});
    });
}

customerController.putCustomer = (req, res) => {
    const { customer_id } = req.body; // Get id from URL params
    const {name, email, address, phone} = req.body;
  
    // Check if required fields are provided
    if (!name || !email || !address || !phone) {
      return res.status(400).json({ message: "Please provide customer_id, name, email, address, phone" });
    }
  
    const data = { name, email, address, phone };
  
    // CUSTOMER UPDATE
    customerModel.putCustomer(customer_id, data, (error, result) => {
      if (error) {
        console.error("Error updating cashier: ", error);
        return res.status(500).json({ message: "Error updating cashier" });
      }
  
      return res.status(200).json({ message: "Cashier updated successfully" });
    });
  };
    // CUSTOMER DELETE

    customerController.deleteCustomer = (req, res) => {
    const idsToDelete = req.body.customer_id; 
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    customerModel.deleteCustomer(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting customer: ", error);
        return res.status(500).json({ message: "Error deleting customer" });
      }
  
      return res.status(200).json({ message: "Customer deleted successfully", deletedCount: result.affectedRows });
    });
  };


module.exports = customerController;
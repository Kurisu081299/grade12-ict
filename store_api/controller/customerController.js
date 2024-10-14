const customerModel = require ('../model/customerModel');
const customerController = {};

customerController.getCustomer = (req, res) => {
    customerModel.getCustomer((error, getData)=> {
        if (error){
            console.error("Error getting Products. Error: ", error);
            return res.status(500).json({message: "Error Getting Products"});
        }
        return res.status(200).json({message: "Products Retrieved successfully", data: getData});
    });
};

customerController.postCustomer = (req, res) => {
    const {name, email, phone, address} = req.body;

    const data = {name, email, phone, address};

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
    const {name, email, phone, address } = req.body;
  
    // Check if required fields are provided
    if (!name || !email || !phone || !address || !customer_id) {
      return res.status(400).json({ message: "Please provide id, name, email, phone, address" });
    }
  
    const data = { name, email, phone, address };
  
    // Call the model to update grade 11 data
    customerModel.putCustomer(customer_id, data, (error, result) => {
      if (error) {
        console.error("Error updating customer: ", error);
        return res.status(500).json({ message: "Error updating customer" });
      }
  
      return res.status(200).json({ message: "Customer updated successfully" });
    });
  };

  customerController.deleteCustomer = (req, res) => {
    const idsToDelete = req.body.customer_id; // Assuming you're passing an array of IDs in req.body.ids
  
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
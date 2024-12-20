const cashierModel = require ('../model/cashierModel');
const cashierController = {};

cashierController.getCashier = (req, res) => {
    cashierModel.getCashier((error, getData)=> {
        if (error){
            console.error("Error getting Products. Error: ", error);
            return res.status(500).json({message: "Error Getting Products"});
        }
        return res.status(200).json({message: "Products Retrieved successfully", data: getData});
    });
};

cashierController.postCashier = (req, res) => {
    const {name, role} = req.body;

    const data = {name, role};

    cashierModel.postCashier(data, (error,result) => {
        if (error){
            console.error("Error inserting cashier.", error);
            return res.status(500).json({ message: "Error inserting cashier"});
        }
        return res.status(200).json ({ message: "Cashier Inserted Successfully"});
    });
}

cashierController.putCashier = (req, res) => {
    const { cashier_id } = req.body; // Get id from URL params
    const {name, role } = req.body;
  
    // Check if required fields are provided
    if (!name || !role || !cashier_id) {
      return res.status(400).json({ message: "Please provide id, name, role" });
    }
  
    const data = { name, role };
  
    // Call the model to update grade 11 data
    cashierModel.putCashier(cashier_id, data, (error, result) => {
      if (error) {
        console.error("Error updating cashier: ", error);
        return res.status(500).json({ message: "Error updating cashier" });
      }
  
      return res.status(200).json({ message: "Cashier updated successfully" });
    });
  };

  cashierController.deleteCashier = (req, res) => {
    const idsToDelete = req.body.cashier_id; // Assuming you're passing an array of IDs in req.body.ids
  
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
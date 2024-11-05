const purchaseModel = require ('../model/purchaseModel');
const purchaseController = {};
    //  Purchase GET
    purchaseController.getPurchase = (req, res) => {
    purchaseModel.getPurchase((error, getData)=> {
        if (error){
            console.error("Error getting Purchase. Error: ", error);
            return res.status(500).json({message: "Error Getting Purchase"});
        }
        return res.status(200).json({message: "Purchase Retrieved successfully", data: getData});
    });
};
   
purchaseController.postPurchase = (req, res) => {
    const {product_id, customers_id, cashier_id, amount, status} = req.body;

    const data = {product_id, customers_id, cashier_id, amount, status};
    // CUSTOMER POST
    purchaseModel.postPurchase(data, (error,result) => {
        if (error){
            console.error("Error inserting products.", error);
            return res.status(500).json({ message: "Error inserting products"});
        }
        return res.status(200).json ({ message: "Products Inserted Successfully"});
    });
}

purchaseController.putPurchase = (req, res) => {
    const { purchase_id } = req.body; 
    const {product_id, customers_id, cashier_id, amount, status} = req.body;
  
    // Check if required fields are provided
    if (!product_id || !customers_id || !cashier_id || !amount || !status) {
      return res.status(400).json({ message: "product_id, customers_id, cashier_id, amount, status" });
    }
  
    const data = { product_id, customers_id, cashier_id, amount, status };
  
    //  Purchase UPDATE
    purchaseModel.putPurchase(purchase_id, data, (error, result) => {
      if (error) {
        console.error("Error updating purchase ", error);
        return res.status(500).json({ message: "Error updating purchase" });
      }
  
      return res.status(200).json({ message: "Purchase updated successfully" });
    });
  };
    //  Purchase DELETE

    purchaseController.deletePurchase = (req, res) => {
    const idsToDelete = req.body.purchase_id; 
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    purchaseModel.deleteProducts(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting purchase: ", error);
        return res.status(500).json({ message: "Error deleting purchase" });
      }
  
      return res.status(200).json({ message: "Purchase deleted successfully", deletedCount: result.affectedRows });
    });
  };


module.exports = purchaseController;
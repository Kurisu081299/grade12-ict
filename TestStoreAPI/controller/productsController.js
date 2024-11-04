const productsModel = require ('../model/productsModel');
const productsController = {};
    // PRODUCTS GET
    productsController.getProducts = (req, res) => {
    productsModel.getProducts((error, getData)=> {
        if (error){
            console.error("Error getting Products. Error: ", error);
            return res.status(500).json({message: "Error Getting Products"});
        }
        return res.status(200).json({message: "Products Retrieved successfully", data: getData});
    });
};

productsController.postProducts = (req, res) => {
    const {name, description, price, stock, category} = req.body;

    const data = {name, description, price, stock, category};
    // CUSTOMER POST
    productsModel.postProducts(data, (error,result) => {
        if (error){
            console.error("Error inserting products.", error);
            return res.status(500).json({ message: "Error inserting products"});
        }
        return res.status(200).json ({ message: "Products Inserted Successfully"});
    });
}

productsController.putProducts = (req, res) => {
    const { products_id } = req.body; // Get id from URL params
    const {name, description, price, stock, category} = req.body;
  
    // Check if required fields are provided
    if (!name || !description || !price || !stock || !category ) {
      return res.status(400).json({ message: "Please provide name, description, price, stock, category" });
    }
  
    const data = { name, description, price, stock, category };
  
    // CUSTOMER UPDATE
    productsModel.putProducts(products_id, data, (error, result) => {
      if (error) {
        console.error("Error updating products: ", error);
        return res.status(500).json({ message: "Error updating products" });
      }
  
      return res.status(200).json({ message: "Products updated successfully" });
    });
  };
    // CUSTOMER DELETE

    productsController.deleteProducts = (req, res) => {
    const idsToDelete = req.body.products_id; 
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    productsModel.deleteProducts(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting customer: ", error);
        return res.status(500).json({ message: "Error deleting products" });
      }
  
      return res.status(200).json({ message: "Products deleted successfully", deletedCount: result.affectedRows });
    });
  };


module.exports = productsController;
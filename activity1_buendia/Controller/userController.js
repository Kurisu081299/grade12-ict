const userModel = require ('../Model/userModel');
const userController = {};

userController.getProducts = (req, res) => {
    userModel.getProductsModel ((error, getData)=> {
        if (error){
            console.error("Error getting products data. Error: ", error);
            return res.status(500).json({message: "Error Getting Data"});
        }
        return res.status (200).json({message: "Product Data retrieved successfully", data: getData});
    });
};

userController.getStores = (req, res) => {
    userModel.getStoresModel ((error, getData)=> {
        if (error){
            console.error("Error getting store data. Error: ", error);
            return res.status(500).json({message: "Error Getting Data"});
        }
        return res.status (200).json({message: "Store Data retrieved successfully", data: getData});
    });
};

//POST DATA

userController.postProducts = (req, res) => {
    const {item_name, price, description} = req.body;

    const data = {item_name, price, description};

    userModel.postProducts(data, (error,result) => {
        if (error){
            console.error("Error inserting product data. Error: ", error);
            return res.status(500).json({message: "Error inserting Data"});
        }
        return res.status (200).json({message: "Product Data inserted successfully"});
    });
}

userController.postStores = (req, res) => {
    const {store_name, stock_number} = req.body;

    const data = {store_name, stock_number};

    userModel.postStores (data, (error,result) => {
        if (error){
            console.error("Error inserting store data. Error: ", error);
            return res.status(500).json({message: "Error inserting Data"});
        }
        return res.status (200).json({message: "Store Data inserted successfully"});
    });
}

//PUT DATA

userController.putProducts = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const { item_name, price, description } = req.body;
  
    // Check if required fields are provided
    if (!item_name || !price || !description) {
      return res.status(400).json({ message: "Please provide item_name, price, and description" });
    }
  
    const data = { item_name, price, description};
  
    // Call the model to update grade 12 data
    userModel.updateProducts(id, data, (error, result) => {
      if (error) {
        console.error("Error updating product data: ", error);
        return res.status(500).json({ message: "Error updating product data" });
      }
  
      return res.status(200).json({ message: "Product data updated successfully" });
    });
  };

// AAAAAAAAAAAAAAAAAAAAAAAA
// AAAAAAAAAAAAAAAAAAAAAAAA

userController.putStores = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { store_name, stock_number} = req.body;

  // Check if required fields are provided
  if (!store_name || !stock_number) {
    return res.status(400).json({ message: "Please provide item_name, price, and description" });
  }

  const data = { store_name, stock_number};

  // Call the model to update grade 12 data
  userModel.updateStores(id, data, (error, result) => {
    if (error) {
      console.error("Error updating store data: ", error);
      return res.status(500).json({ message: "Error updating store data" });
    }

    return res.status(200).json({ message: "Store data updated successfully" });
  });
};

  //DELETE DATA

  userController.deleteProducts = (req, res) => {
    const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    userModel.deleteProducts(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting product data: ", error);
        return res.status(500).json({ message: "Error deleting product data" });
      }
  
      return res.status(200).json({ message: "Product data deleted successfully", deletedCount: result.affectedRows });
    });
  };


  userController.deleteStores = (req, res) => {
    const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    userModel.deleteStores(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting store data: ", error);
        return res.status(500).json({ message: "Error deleting store data" });
      }
  
      return res.status(200).json({ message: "Store data deleted successfully", deletedCount: result.affectedRows });
    });
  };

module.exports = userController;
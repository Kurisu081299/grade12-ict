const productModel = require ('../model/productModel');
const productController = {};

productController.getProducts = (req, res) => {
    productModel.getProduct((error, getData)=> {
        if (error){
            console.error("Error getting Products. Error: ", error);
            return res.status(500).json({message: "Error Getting Products"});
        }
        return res.status(200).json({message: "Products Retrieved successfully", data: getData});
    });
};

productController.postProducts = (req, res) => {
    const {name, description, price, stock, category} = req.body;

    const data = {name, description, price, stock, category};

    productModel.postProduct(data, (error,result) => {
        if (error){
            console.error("Error inserting products.", error);
            return res.status(500).json({ message: "Error inserting products"});
        }
        return res.status(200).json ({ message: "Products Inserted Successfully"});
    });
}

productController.putProducts = (req, res) => {
    const { product_id } = req.body; // Get id from URL params
    const { name, description, price, stock, category } = req.body;
  
    // Check if required fields are provided
    if (!name || !description || !price || !product_id || !stock || !category) {
      return res.status(400).json({ message: "Please provide id, name, description, price, stock, or category" });
    }
  
    const data = {  name, description, price, stock, category };
  
    // Call the model to update grade 11 data
    productModel.updateProduct(product_id, data, (error, result) => {
      if (error) {
        console.error("Error updating product: ", error);
        return res.status(500).json({ message: "Error updating product" });
      }
  
      return res.status(200).json({ message: "Product updated successfully" });
    });
  };

  productController.deleteProducts = (req, res) => {
    const idsToDelete = req.body.product_id; // Assuming you're passing an array of IDs in req.body.ids
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    productModel.deleteProduct(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting product: ", error);
        return res.status(500).json({ message: "Error deleting product" });
      }
  
      return res.status(200).json({ message: "Product deleted successfully", deletedCount: result.affectedRows });
    });
  };


module.exports = productController;
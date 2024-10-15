const productModel = require ('../model/productModel');
const productController = {};
//GET
productController.getProduct = (req, res) => {
    productModel.getProduct((error, getData)=> {
        if (error){
            console.error("Error getting Products. Error: ", error);
            return res.status(500).json({message: "Error Getting Products"});
        }
        return res.status(200).json({message: "Products Retrieved successfully", data: getData});
    });
};
//INSERT
productController.postProduct = (req, res) => {
    const { product_id } = req.body;
    const {stock_number, store_number} = req.body;

    const data = {stock_number, stock_number};

    productModel.postProduct(data, (error,result) => {
        if (error){
            console.error("Error inserting products.", error);
            return res.status(500).json({ message: "Error inserting products"});
        }
        return res.status(200).json ({ message: "Products Inserted Successfully"});
    });
}
//UPDATE
productController.putProduct = (req, res) => {
    const { product_id } = req.body; // Get id from URL params
    const { stock_number, store_number } = req.body;
  
    // Check if required fields are provided
    if (!id || !stock_number ||!store_number) {
      return res.status(400).json({ message: "Please provide id, stock number and store number" });
    }
  
    const data = {  stock_number, store_number};
  
    // Call the model to update grade 12 data
    productModel.updateProduct(number_id, data, (error, result) => {
      if (error) {
        console.error("Error updating product: ", error);
        return res.status(500).json({ message: "Error updating product" });
      }
  
      return res.status(200).json({ message: "Product updated successfully" });
    });
  };
//DELETE
  productController.deleteProduct = (req, res) => {
    const idsToDelete = req.body.product_id; 
  
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
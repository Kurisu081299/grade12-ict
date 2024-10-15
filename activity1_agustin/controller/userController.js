const userModel = require ('../model/userModel');
const userController = {};

userController.getData = (req, res) => {
    userModel.getDataModel ((error, getData) => {
        if(error){
            console.error("Error gettting data. Error: ", error);
            return res.status(500).json({message: "Error Getting Data"});           
        }       
        return res.status (200).json({message: "Data Retrieved successfully", data: getData});
    });
};
//INSERT
userController.postData = (req, res) => {
    const { customer_id } = req.body;
    const {item_name, price, description} = req.body;

    const data = { item_name, price, description };

    userModel.postUser (data, (error,result) =>{
    if(error){
        console.error("Error getting data: Error: ", error);
        return res.status(500).json({message: "Error inserting data"});
    }
    return res.status(200).json ({ message: "Data Inserted Successfully" });
});
}
//UPDATE
    userController.putData = (req, res) => {
    const { customer_id } = req.body; // Get id from URL params
    const {item_name, price, description} = req.body;
  
    // Check if required fields are provided
    if (!item_name ||!price ||!description) {
      return res.status(400).json({ message: "Please provide id, name, email, phone, address" });
    }
  
    const data = {item_name, price, description};
  
    // Call the model to update grade 12 data
    userModel.putData(customer_id, data, (error, result) => {
      if (error) {
        console.error("Error updating user: ", error);
        return res.status(500).json({ message: "Error updating user" });
      }
  
      return res.status(200).json({ message: "User updated successfully" });
    });
  };
//DELETE
    userController.deleteData = (req, res) => {
    const idsToDelete = req.body.customer_id;
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
      userModel.deleteData(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting user: ", error);
        return res.status(500).json({ message: "Error deleting user" });
      }
  
      return res.status(200).json({ message: "User deleted successfully", deletedCount: result.affectedRows });
    });
  };


module.exports = userController;
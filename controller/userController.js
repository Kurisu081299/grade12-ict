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


userController.postData = (req, res) => {
    const {name, age} = req.body;

    const data = {name, age};

    userModel.postData (data, (error,result) =>{
    if(error){
        console.error("Error getting data: Error: ", error);
        return res.status(500).json({message: "Error inserting data"});
    }
    return res.status(200).json ({ message: "Data Inserted Successfully" });
});
}

userController.putData = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const { name, age } = req.body;
  
    // Check if required fields are provided
    if (!name || !age ) {
      return res.status(400).json({ message: "Please provide name and age" });
    }
  
    const data = { name, age };
  
    // Call the model to update data
    userModel.updateData(id, data, (error, result) => {
      if (error) {
        console.error("Error updating data: ", error);
        return res.status(500).json({ message: "Error updating data" });
      }
  
      return res.status(200).json({ message: " data updated successfully" });
    });
  };
  userController.deleteData = (req, res) => {
    const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    userModel.deleteData(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting data: ", error);
        return res.status(500).json({ message: "Error deleting data" });
      }
  
      return res.status(200).json({ message: "data deleted successfully", deletedCount: result.affectedRows });
    });
  };
module.exports = userController;
const userModel = require ('../Model/userModel');
const userController = {};

userController.getData = (req, res) => {
    userModel.getDataModel ((error, getData)=> {
        if (error){
            console.error("Error getting data. Error: ", error);
            return res.status(500).json({message: "Error Getting Data"});
        }
        return res.status (200).json({message: "Data retrieved successfully", data: getData});
    });
};

userController.postData = (req, res) => {
    const {name, address, age} = req.body;

    const data = {name, address, age};

    userModel.postData (data, (error,result) => {
        if (error){
            console.error("Error inserting data. Error: ", error);
            return res.status(500).json({message: "Error inserting Data"});
        }
        return res.status (200).json({message: "Data inserted successfully"});
    });
}

userController.putData = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const { name, age, address } = req.body;
  
    // Check if required fields are provided
    if (!name || !age || !address || !id) {
      return res.status(400).json({ message: "Please provide id, name, age, and address" });
    }
  
    const data = { name, age, address };
  
    // Call the model to update grade 11 data
    userModel.updateData(id, data, (error, result) => {
      if (error) {
        console.error("Error updating grade 11 data: ", error);
        return res.status(500).json({ message: "Error updating grade 11 data" });
      }
  
      return res.status(200).json({ message: "Grade 11 data updated successfully" });
    });
  };

  userController.deleteData = (req, res) => {
    const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    userModel.deleteData(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting grade 11 data: ", error);
        return res.status(500).json({ message: "Error deleting grade 11 data" });
      }
  
      return res.status(200).json({ message: "Grade 11 data deleted successfully", deletedCount: result.affectedRows });
    });
  };

module.exports = userController;
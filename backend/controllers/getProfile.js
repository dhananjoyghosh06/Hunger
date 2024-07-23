import User from "../models/user.js";
export const getProfileImage =  async (req, res) => {
    try {
      // Assuming you have user authentication and can get the user ID from the request
      const userId = req.body.data.id;
      
      const USER = await User.findById(userId);

      if(!USER ) return res.status(404).json({msg:"User not found"});
      
      
      return res.status(200).json({USER});
    } catch (error) {
      return res.status(401).json({msg:"Internal Server Error"});
    }
  };
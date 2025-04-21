import newUser from "../Model/ProdSchema.js"

export const read = async(req,res)=>{
    const allProd = await newUser.find()
    return res.status(200).json(allProd)
}
export const add = async(req,res)=>{
    const {userName,userAddress,userAge,userMobile} = req.body
    const existingUser = await newUser.findOne({userName})
    if(existingUser){
        return res.status(403).json({message:"Data already Inserted"})
    }
    const insertNewUser = await newUser({userName,userAddress,userAge,userMobile}).save()
    return res.status(200).json({message:"Data inserted Sucessfully",data:insertNewUser})
}
// export const update = async (req, res) => {
//     try {
//       const { userName } = req.params;
//       const {userMobile} = req.body;
//         const existingUser = await newUser.findOne({ userName });
//       if (!existingUser) {
//         return res.status(403).json({ message: "User Not Exist" });
//       }
//       const updatedUserInfo = await newUser.findOneAndUpdate(
//         { userName },
//         { $set: { userMobile }},{ new: true });
  
//       return res.status(200).json({
//         message: "Data Updated Successfully",
//         data: updatedUserInfo,
//       });
//     } catch (err) {
//       return res.status(400).json(err);
//     }
//   };

  export const update = async (req,res) => {
    try {
        const {userName} =  req.params
        const {userAddress} = req.body
        const updatedata = await newUser.findOneAndUpdate({userName:userName},{$set:{userAddress}})
        if(!updatedata){
            res.status(404).json("Doesn't Exist")
        }
        
        res.status(202).json({message:"updated Successfully",
            data: updatedata})
    } catch (error) {
        res.status(500).json(error)
    }
}
  
export const delete_data = async (req,res) => {
    try {
        const {userName} =  req.params
        const deletedata = await newUser.findOneAndDelete({userName:userName})
        if(!deletedata){
            res.status(404).json("Doesn't Exist")
        }
        
        res.status(202).json({message:"Deleted Successfully",
            data: deletedata})
    } catch (error) {
        res.status(500).json(error)
    }
}
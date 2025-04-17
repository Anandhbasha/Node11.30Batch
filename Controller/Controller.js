import newUser from "../Model/ProdSchema.js"

export const read = async(req,res)=>{
    const allProd = await newUser.find()
    res.status(200).json(allProd)
}
export const add = (req,res)=>{
    const {userName,Password} = req.body
    res.send(userName,Password)
}
export const update = (req,res)=>{
    const id = req.params
    const {Password} = req.body
    res.send(Password)
}
export const delete_data = (req,res)=>{
    const id = req.params
    res.send("Delete Profile sucessfully")
}
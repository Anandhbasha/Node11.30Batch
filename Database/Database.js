import mongoose from "mongoose"

const Database = (URL)=>{
    try {
        mongoose.connect(URL)
        const db = mongoose.connection
        db.once("open",()=>{
            console.log("Db is connected");        
    })
    } catch (error) {
       console.log("Unable to connect db");
        
    }

}

export default Database
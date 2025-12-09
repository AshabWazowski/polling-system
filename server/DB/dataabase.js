import mongoose from "mongoose";


export const ConnectDB = async (mongoURL) =>{
try{
    await mongoose.connect(mongoURL);
    console.log('Database connected successfully.');
    
}catch(error){
    console.log(`Problem connecting DB. Error is : ${error.message}`)
}
}
import mongoose from 'mongoose';

interface Connection{
    isConnected : Boolean;
}

const connection:Connection = {
    isConnected: false,
};

export default async function connectToDB(){
      try{
            if(connection.isConnected){
                  console.log("using the existing connection")
                  return;
            }

            const db = await mongoose.connect('mongodb+srv://ayushmeena:ayushmeena@harkirat.vs1sjvb.mongodb.net/', {dbName: 'blog'})
            connection.isConnected = mongoose.connections[0].readyState === 1 ? true: false;
            console.log("mongoose is connected");
      }catch(error){
            console.error(error);
            throw new Error("Issue in connect to db");
      }
}
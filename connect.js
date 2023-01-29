const {MongoClient}=require('mongodb');
const  url  = 'mongodb://localhost:27017/shubham';
const client = new MongoClient(url);
const dbName = 'shubham';
async function dbConnection()
{
    client.connect();
    console.log("Connected");
    const db= client.db(dbName);
    var name1=db.collection("customerData");
    // const result =name1.insertOne({city:"Indore"});
    const result1 =await name1.find().toArray();
    console.log(result1);
}
dbConnection();

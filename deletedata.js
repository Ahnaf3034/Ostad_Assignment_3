// Import Database
const {client} = require("./dbconfig")
// Function Execute
DeleteAllItem(client);

// Delete Data function
function DeleteAllItem(client){
    var MyDataBase = client.db("Shop")  //database Name
    var MyCollection = MyDataBase.collection('Customer') //Collection Name

    MyCollection.deleteMany(function(error,resultObject){
        if(error){
            console.log("Data Delete failed")
        }
        else{
            console.log(resultObject);
        }
    })
}
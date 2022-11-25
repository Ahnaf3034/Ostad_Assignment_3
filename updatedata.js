// Import Database
const {client} = require("./dbconfig")
// Function Execute
UpdateData(client);

// Update data function
function UpdateData(client){
    var MyDataBase = client.db("Shop")  //database Name
    var MyCollection = MyDataBase.collection('Customer') //Collection Name

    var MyQuery = {Name: "Rifat"};
    var NewValues = {$set: {Age: "26"}};

    MyCollection.updateOne(MyQuery,NewValues, function(error,result){
        if(error){
            console.log("Update Failed")
        }
        else{
            console.log(result);
        }
    })

}
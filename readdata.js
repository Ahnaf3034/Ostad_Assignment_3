// Import Database
const {client} = require("./dbconfig")
// Function Execute
ReadOneData(client);
ReadAllDataBySort(client);

// Read One Data function
function ReadOneData(client){
    var MyDataBase = client.db("Shop")  //database Name
    var MyCollection = MyDataBase.collection('Customer') //Collection Name

    var FindItem = {Name:"Munim"}

    MyCollection.findOne(FindItem,function(error,result){
        if(error){
            console.log("Data Find Failed")
        }
        else{
            console.log(result);
        }
    })
}


// Read All Data by sort function
function ReadAllDataBySort(client){
    var MyDataBase = client.db("Shop")  //database Name
    var MyCollection = MyDataBase.collection('Customer') //Collection Name

    var Sortpattern={Age:1}

    MyCollection.find().sort(Sortpattern).toArray(function(error,resultSort){
        if(error){
            console.log("Data Find Failed")
        }
        else{
            console.log(resultSort);
        }
        })
}
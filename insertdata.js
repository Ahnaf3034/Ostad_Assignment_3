// Import Database
const {client} = require("./dbconfig")
// Function Execute
InsertData(client);
// Data Insert
function InsertData(client){
   var MyDataBase = client.db("Shop")  //database Name
   var MyCollection = MyDataBase.collection('Customer') //Collection Name

   var MyData = [{Name: 'Ahnaf',Age: '22',ContactNo: '015811'},
   {Name: 'Rashid',Age: '24',ContactNo: '012334'},
   {Name: 'Mumit',Age: '29',ContactNo: '014567'},
   {Name: 'Munim',Age: '18',ContactNo: '018970'},
   {Name: 'Rifat',Age: '24',ContactNo: '012582'}]

   MyCollection.insertMany(MyData, function (error){  //Data insert
    if(error){
        console.log("Data Insert Failed");
    }
    else{
        console.log("Data Insert Success")
    }
   }
   )
}
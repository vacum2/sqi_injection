const express = require("express");
const fs = require("fs");
    
const app = express();
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));
  
const filePath = "users.json";
app.get("/api/users", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(content);
    res.send(users);
});
app.get("/api/users/:id", function(req, res){
       
    const id = req.params.id; 
    const content = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(content);
    let user = null;
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            user = users[i];
            break;
        }
    }
});

app.listen(8000, function(){
    console.log("Сервер ожидает подключения...");
});
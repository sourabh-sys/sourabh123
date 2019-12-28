express=require("express");
app=express();
fs=require("fs");

bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    
resp.send("simple interest: ");
    console.log("file send to response");
});

app.listen(2304,function(){
	console.log("server started on port 2304");
})
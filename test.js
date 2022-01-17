require("dotenv");
var express=require("express"),
app=express();

const port = process.env.PORT || 3000 ;

app.get("/",function(req,res){

	res.send("hosted successfully")
})
app.listen(port,function(){

	console.log("server started")
})

var express=require("express"),
app=express()

app.get("/",function(req,res){

	res.send("hosted successfully")
})
app.listen(3322,function(){

	console.log("server started")
})
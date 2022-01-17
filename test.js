require("dotenv");
var express=require("express"),
app=express();

const port = process.env.PORT || 3000 ;

app.get("/",function(req,res){

	res.send("hosted successfully")
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

var express=require('express');
var app=express();

var path=require('path');
var public=path.join(__dirname,'static');
app.use('/',express.static(public));
var users=[
  {"name":"1"},
  {"name":"2"},
  {"name":"3"}
]

app.get('/users',function(req,res){
  res.end(JSON.stringify(users));
})

var server=app.listen(8080,function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log("running:%s:%s",host,port);
})

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', function(client){
  console.log("a client has connected___");

  client.on('disconnect', function(){
    console.log("a client has ___disconnected");
  });

  client.on('join', function(data){
    console.log(data);
  });

  client.on('messages', function(data){
    client.broadcast.emit('broad', data);
  });

});

http.listen(3000, function(){
  console.log("listening on port 3000");
});

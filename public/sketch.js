const socket = io();

socket.on("connection", socket => {
    console.log(socket.id)
    socket.on("private message", (anotherSocketId, msg) => {
      socket.to(anotherSocketId).emit("private message", socket.id, msg);
    });
});

//socket.on('drawing', onDrawingEvent);
function onDrawingEvent() {
    console.log("Yo")
}
function setup() {
    createCanvas(500, 500);
    x = width/2; 
    y = height/2;
}

function draw() {
    background(255, 112, 112);
}
const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}
const myEmitter = new EventEmitter();


myEmitter.on('newSale',()=> {
    console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
    console.log('Customer Name: Shafiq')
});

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock`);
})
myEmitter.emit('newSale',9);
/////////////////////////

const server = http.createServer();
server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('request recieved');
    res.end('request recieved');
});
server.on('request', (req, res) => {
    console.log('another request recieved');
});
server.on('close', () => {
    console.log('server closed');
});
server.listen(3000, "127.0.0.1", () => {
    console.log('waiting for requests');
});

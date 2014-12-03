/**
 * Created by Davy on 26/11/2014.
 */

var net = require('net');
var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/tty-usbserial1", { baudrate: 9600 });

net.createServer(function(socket)
{
    socket.name = socket.remoteAddress + ":" + socket.remotePort;

    socket.on('data', function (data)
    {
        var sSplit = data.toString().split('/');

        var newValue = (sSplit[0]/100)*255;

        console.log(newValue);

        serialPort.write(newValue, function(err, results){
            console.log(err);
            console.log(results);
        });
    });

}).listen(3000);

console.log("running at port 3000");
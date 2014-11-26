/**
 * Created by Davy on 26/11/2014.
 */

var net = require('net');
//var SerialPort = require("serialport").SerialPort;
//var serialPort = new SerialPort("/dev/tty-usbserial1", { baudrate: 57600 });



net.createServer(function(socket)
{
    socket.name = socket.remoteAddress + ":" + socket.remotePort;

    socket.on('data', function (data)
    {
        var sSplit = data.toString().split('/');

        console.log(sSplit[0]);

        /*serialPort.write(data, function(err, results){
            console.log(err);
            console.log(results);
        });*/
    });

}).listen(3000);

console.log("running at port 3000");
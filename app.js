/**
 * Created by Davy on 26/11/2014.
 *
 * install
 *
 * install this--> https://github.com/sarfata/pi-blaster
 *
 * do this:
 *
 * npm install pi-blaster.js
 */

var net = require('net');
var blaster = require('pi-blaster.js');
/*
var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/tty-usbserial1", { baudrate: 9600 });
*/

net.createServer(function(socket)
{
    socket.name = socket.remoteAddress + ":" + socket.remotePort;

    socket.on('data', function (data)
    {
        var sSplit = data.toString().split('/');

        /*var newValue = (sSplit[0]/100)*255;

        console.log(newValue);

        serialPort.write(newValue, function(err, results){
            console.log(err);
            console.log(results);
        });*/

        //waardes
        //13 15 --> links
        //16 18 --> rechts

        if(sSplit[0]<10 && sSplit[0]>-10)
        {
            //rechtdoor
            blaster.setPwm(13,1);
            blaster.setPwm(16,1);
        }
        else if(sSplit[0]>10)
        {
            //links
            var calc = 100 - sSplit[0];
            calc = calc/100;

            blaster.setPwm(13, calc);
            blaster.setPwm(16,1);
        }
        else if(sSplit[0]<-10)
        {
            //rechts
            var calc = 100 + sSplit[0];
            calc = calc/100;

            blaster.setPwm(13,1);
            blaster.setPwm(16,calc);
        }


    });

}).listen(3000);

console.log("running at port 3000");
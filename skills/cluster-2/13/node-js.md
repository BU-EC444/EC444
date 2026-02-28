# Node.js and Serial Data Saved to File

Node.js is an open source server environment that allows you to to run
javascript on a server. This is handy as it lets us quickly build
cross-platform HTTP servers either on a laptop or raspberri pi.

It's easy to install and use. This skill works through a short
tutorial.  Later, you will link this to modules for graphing in Quest 2.

<p align="center">
<img src="/docs/images/node.png" width="20%">
</p>
<p align="center">
<i>Node.js </i>


## Assignment
### PART A
1. Download the appropriate version of node.js for your operating system
2. Install node.js and npm (node package manager)
3. Complete the hello world tutorial here [www.w3schools.com](https://www.w3schools.com/nodejs/default.asp)
4. Complete the following modules:
      - Modules
      - HTTP module
      - URL Module
      - NPM
      - Events

### PART B
5. Now that you have a sense of working with node,
choose any sensor from your completed skills and program this to send sensor
readings on the ESP32 to the serial port at one-second intervals.
6. Then create a node app running on your laptop to read from the serial port
and print sensor data to console (we provide example code referenced below).
7. Lastly, modify the node app to also write the sensor data to a comma-separated text file with one line
per (current time, sensor-value). We recommend that you use the `fs.writeFile()` API.
8. Report


## FAQ

1. What's with the serialport conflict with monitor?
Answer: the COM port (serial port) can normally only be used by one application.
If you are running 'monitor' you will be unable to connect with serialport within node.js.  So the process is:
   -  Flash the ESP32 (uses serial port to do this) to send data via UART. (Don't run monitor --  just `idf.py -p flash`)
   - Then start your node app inside the node server
Alternatively, you can test this way:
   - Flash the ESP32 to send data via UART
   - Test with `idf.py monitor` to verify if data is coming through, but remember to kill the monitor program
   before you start the node app.

## Reference Material
- [Node.js and download](https://nodejs.org/en/)
- [Node.js Desing Pattern](/docs/design-patterns/docs/dp-nodejs.md)
- [Node.js Tutorial](https://www.w3schools.com/nodejs/default.asp)
- [Serial Port Module](https://www.npmjs.com/package/serialport)
- [Serial to Node Example](https://github.com/BU-EC444/04-Code-Examples/tree/main/serial-esp-to-node-serialport)
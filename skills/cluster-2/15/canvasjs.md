# CanvasJS

CanvasJS is a charting library that uses javascript.

<p align="center">
<img src="/docs/images/canvasjs.png" width="25%">
</p>
<p align="center">
<i> CanvasJS</i>
</p>

Although CanvasJS will run standalone (as you will see with the online
tutorials and examples), we ultimately want to coerce it to work with
our real-time data streams and file or database sources. For this
reason, we will integrate CanvasJS with a node server that hosts an
http server.

Recall that from the node tutorial, a node app can:
- Instantiate a http server
- Produce the index.html file used by the web server
- Run local javascript and other functions using various modules
- Meanwhile, the javascript in the index.html file can have javascript that
executes on the client browser.

What we can do here is to design the client javascript (in the
index.html file) to interact with the node app javascript (in the
app.js file) to perform coordinated activities such as data transfer.

So for CanvasJS, we want to put this client-side javascript into the
index.html file that is served up by the node app (where we want to
enable lots of charting functions and interaction). Then we put
javascript code in the node app that is able to open files on the node
server, and is able to pass data to the client-side javascript. This
means, when we integrate with the ESP32 code we need each of these to
work:

- ESP32 that sends data to the UART (on the ESP32)
- Node app code that can read the serial port (on laptop)
- Node app code that can send data to the client-side (on laptop)
- index.html that is hosted by the node server as a file, and
  executed at the client browser
- Javascript code in index.html that communicates with the
  node app from the client browser to the node http server

## Overview of the skill assignment

In this skill you will run graphing/plotting in CanvasJS within an
index.html file hosted by a node server app.

First start with the sample applications shown at the CanvasJS site to
get a feel for the behavior and the major components of the CanvasJS
APIs. These are standalone -- no node required.

Then setup a node app to host an index.html file. This is in the node
tutorial.  You can embed a CanvasJS example in the index.html file
here, complete with the data set for plotting. This should execute
without any links between the node app and the client javascript (in
the index.html file).

Your next move is to put the data set in the node server app instead
of the index.html file. Data can be passed from the app with suitable
instantiation of socket.io on both sides.

Once this is working, the last step is to use the `fs.readFile()`
method to open the test data file stored in the same directory as your
node app, and read the data instead of hard-coding it inside the node
app.

Each of the above can be built and tested prior to moving to the next
step. All of this is a precursor to using a database attached to a node app.


## Sample TSV Data Set -- "Smoke"

```
Time	ID	Smoke	Temp
1000	1	0	30.99551665
1000	2	0	32.61403901
1000	3	0	34.24155482
1000	4	0	33.93040826
1000	5	0	32.16053975

```

## Sample CSV Data Set -- "Stocks"

```
Date,Stock,Closing
1,AMZN,100
1,FB,100
1,GOOGL,1000
1,MSFT,40
2,AMZN,200

```

## Assignment
1. Pick two examples from the CanvasJS set ([CanvasJS Examples](https://canvasjs.com/javascript-charts/)) and bring them up on your laptop
2. Design your own chart to read and display data from one of the files provided (you can use the stocks data or the smoke data).
3. Depending on the method used, you may find that when executing from a local HTML file there will be a CORS violation on the file read.
This issue is overcome by using a node app creating an http server (next).
     - Create an index.html to be served to a client (this will include its own javascript code)
     - Write your node app that includes data to be plotted
     - Run the node app that launches the http server and runs local node code to service the client HTML
4. Identify code to pass the data set from the node app to the client HTML; create matching receive code in the javascript of your index.html. The client code
should write the received data into a format suitable for plotting the data in CanvasJS (we recommend using socket.io)
5. Once this works, use the `fs.readFile() method to load the data from a file instead of hardcoding the data into the node app.
6. Demonstrate and report

***Note: you should be using node and a node app in your solution here.***


## Reference Material
- [CanvasJS](https://canvasjs.com/javascript-charts/)
- [Canvasjs Example 1](https://canvasjs.com/javascript-charts/stacked-column-chart/)
- [Canvasjs Example 2](https://canvasjs.com/javascript-charts/stacked-column-chart/)
- [Socket.io Design Pattern](/docs/design-patterns/docs/dp-socketIO.md)
- [Comma-separated (CSV) stocks-csv.txt](/docs/skills/docs/test-data/stocks-csv.txt)
- [Tab-separated (TSV) smoke.txt File](/docs/skills/docs/test-data/smoke.txt)
- [Reading CSV files into CanvasJS](https://canvasjs.com/docs/charts/how-to/create-charts-from-csv/)
- [Sending Data from the ESP32 to Node and then to Canvas Example Code](https://github.com/BU-EC444/04-Code-Examples/tree/main/serial-canvas)
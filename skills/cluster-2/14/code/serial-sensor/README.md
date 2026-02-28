# Serial Sensor (Part B)

Node app that reads sensor data from an ESP32 over the serial port, prints each value to the console, and appends lines to a CSV file as `timestamp,value`.

## Prerequisites

- ESP32 flashed with firmware that prints one sensor value per line over UART at 1-second intervals (e.g. `printf("%.2f\n", value);`).
- **Do not** run `idf.py monitor` while this app is running; only one process can use the serial port.

## Usage

```bash
cd serial-sensor
npm install   # already done if you ran from repo root
npm start
```

Override the serial port and baud rate via environment variables:

- **macOS**: `SERIAL_PORT=/dev/cu.usbserial-0001 node index.js`
- **Windows**: `SERIAL_PORT=COM3 node index.js`
- **Linux**: `SERIAL_PORT=/dev/ttyUSB0 node index.js`
- **Baud rate** (default 115200): `BAUD_RATE=115200 node index.js`

## Output

- **Console**: Each line received is printed with a timestamp.
- **CSV**: `sensor_log.csv` in this directory, one line per reading: `timestamp,value`. Uses `fs.writeFile(..., { flag: 'a' })` to append.

## ESP32 format

Send one numeric value per line so the app can log it as-is (e.g. `25.30` or `1024`). Match the baud rate (default 115200) in your ESP32 UART config.

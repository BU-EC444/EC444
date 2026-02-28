/*
 * Usage:
 *   node index.js
 *   SERIAL_PORT=/dev/cu.usbserial-0001 node index.js   # macOS
 */

const fs = require("fs");
const path = require("path");
const { SerialPort } = require("serialport");

// match your OS and ESP32 UART baud rate!!!
const SERIAL_PORT =
  process.env.SERIAL_PORT ||
  process.platform === "win32"
    ? "COM3"
    : "/dev/cu.usbserial-0001";
const BAUD_RATE = parseInt(process.env.BAUD_RATE || "115200", 10);
const CSV_PATH = path.join(__dirname, "sensor_log.csv");

// not sure if needed but write CSV header on first run
function ensureCsvHeader() {
  try {
    const exists = fs.existsSync(CSV_PATH);
    if (!exists) {
      fs.writeFileSync(CSV_PATH, "timestamp,value\n");
    }
  } catch (err) {
    console.error("Error ensuring CSV header:", err.message);
  }
}

function formatTimestamp() {
  const d = new Date();
  return d.toISOString();
}

function appendLineToCsv(timestamp, value) {
  const line = `${timestamp},${value}\n`;
  fs.writeFile(CSV_PATH, line, { flag: "a" }, (err) => {
    if (err) console.error("Error writing to CSV:", err.message);
  });
}

function main() {
  ensureCsvHeader();

  const port = new SerialPort({
    path: SERIAL_PORT,
    baudRate: BAUD_RATE,
  });

  let buffer = "";

  port.on("open", () => {
    console.log(`Serial port ${SERIAL_PORT} opened at ${BAUD_RATE} baud.`);
    console.log("Reading sensor data (one line per value). Logging to console and CSV.\n");
  });

  port.on("data", (data) => {
    buffer += data.toString("utf8");
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() || ""; // keep incomplete line in buffer

    for (const line of lines) {
      const value = line.trim();
      if (value === "") continue;

      const timestamp = formatTimestamp();
      console.log(`[${timestamp}] ${value}`);
      appendLineToCsv(timestamp, value);
    }
  });

  port.on("error", (err) => {
    console.error("Serial port error:", err.message);
  });

  port.on("close", () => {
    console.log("Serial port closed.");
  });
}

main();

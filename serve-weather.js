// Run:  node serve-weather.js
// Serves weather.html from this folder at http://localhost:5173 and opens your browser.
const http = require("http"), fs = require("fs"), path = require("path"), { exec } = require("child_process");
const PORT = 5173, FILE = path.join(__dirname, "weather.html");

if (!fs.existsSync(FILE)) { console.error("weather.html must be in the same folder as this file."); process.exit(1); }

http.createServer((req, res) => {
  fs.readFile(FILE, (err, data) => {
    if (err) { res.writeHead(500); return res.end("Could not read weather.html"); }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    res.end(data);
  });
}).listen(PORT, () => {
  const url = "http://localhost:" + PORT;
  console.log("Weather app running at " + url + "  (press Ctrl+C to stop)");
  const cmd = process.platform === "win32" ? `start "" "${url}"` : process.platform === "darwin" ? `open "${url}"` : `xdg-open "${url}"`;
  exec(cmd, () => {});
});

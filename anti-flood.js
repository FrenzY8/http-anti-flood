// Auto-Block HTTP Flood Request
// Exec commands get from github account named: galvinlol
const http = require("http");
const os = require('os')
var blacklist = new Map();
console.log(blacklist)
const fs = require('fs')
console.log(">> Made by .FrenzySG.#2331 <<")
const {
    exec
} = require('child_process');
const client = http.createServer(function(req, res) {
let ipAddress = req.connection.remoteAddress;
        ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
//Create auto-block function:
function blockthem () {
// Exec commands get from github account named: galvinlol
exec(`netsh advfirewall firewall add rule name="BLACKLIST" dir=in action=block remoteip="${ipAddress}"`, (error, stdout, stderr, spawn) => {
console.log(`[${ipAddress}] Connection have been Blocked`)
 });
}
// read serverdata
function serverdataread () {
	if(fs.existsSync('C:/xampp/htdocs/growtopia/server_data.php')) {
		let data = fs.readFileSync('C:/xampp/htdocs/growtopia/server_data.php','utf8')
		res.write(data)	
	} else {
        res.write(`server|${ipAddress}\nport|17091\ntype|1\n#maint|HTTP`);
	}
}
if (req.url == "/growtopia/server_data.php" || req.url == "C:/xampp/htdocs/growtopia/server_data.php") {
        if (req.method = "POST") {
	    res.writeHead(200, "Anti-Flood-HTTP");
            serverdataread();
            res.end();
        } else {
        	if (req.method = "GET") {
	    res.writeHead(200, "Anti-Flood-HTTP");
            serverdataread();
            res.end();
        	} else {
	    blockthem(); // Iam not sure about block they connection here.
	    // but if you get a error while logged in to game(your-server)
	   // just delete it.
        }
    } else {
        blockthem(); //Block the connections lol.
    }
})

client.listen(80)
console.log("[-] Listening to Port 80")
console.log("[-] Auto-Block method is ready.")

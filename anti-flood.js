// Auto-Block HTTP Flood Request
// Exec commands get from github account named: galvinlol
const http = require("http");
const os = require('os')
var blacklist = new Map();
console.log(blacklist)
const fs = require('fs')
console.log(">> Made by ( .FrenzySG.#2331 ) <<")
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
            res.writeHead(200, "HTTP-ANTI-FLOODER")
            serverdataread();
            res.end();
        } else {
        	if (req.method = "GET") {
            res.writeHead(200, "HTTP-ANTI-FLOODER")
            serverdataread();
            res.end();
        	} else {
            // Not post, Not get,
            blockthem(); // not sure abt this.
            // if you get error while logged in into your servers
            // just delete this or make //blockthem();
            // i hope you understand.
            }
        }
    } else {
        // Block any method. ,"GET","POST",
        blockthem(); //Block the connections lol.
    }
})

client.listen(80)
console.log("[] Listening to Port 80")
console.log("[] Auto-Block method is ready.")

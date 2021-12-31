# http-anti-flood
A http-anti flood code for HTTP, recomended used for GTPS/Another private-servers game.
- Feel free to star :) if this helped you..
- Feel free to report a bugs :) if there is a bugs..


# explanations and other
So basically, this http-code will detect the ```flooder```. whoever is detected by the flooder will be immediately blocked by your Windows Firewall.
it is recommended for GTPS ```(Growtopia-Private-Servers)``` because this is very helpful for those who are often affected by ```DDoS Attacks.```

# functions code
```js
function blockthem () {
exec(`netsh advfirewall firewall add rule name="BLACKLIST" dir=in action=block remoteip="${ipAddress}"`, (error, stdout, stderr, spawn) => {
console.log(`[${ipAddress}] Connection have been Blocked`)
 });
}
```
- so if there is a function in your http code. you can write ```blockthem()``` to block a IPs
- exec commands

```js
exec(`netsh advfirewall firewall add rule name="BLACKLIST" dir=in action=block remoteip="${ipAddress}"`, (error, stdout, stderr, spawn) => {
// Do something here.
});
```
Obtained from: 
- [Galvinlol](https://github.com/galvinlol)
- [Serversfault](https://serverfault.com/questions/851922/blocking-ip-address-with-netsh-filter)
- [Microsoft-Docs](https://docs.microsoft.com/en-us/troubleshoot/windows-server/networking/netsh-advfirewall-firewall-control-firewall-behavior) (Via- Deland-Hand)

const version = '1.0.0';
console.log(`Initialized Zyntrox (version ${version}) in this client.`);

if (window.location.href.endsWith('register')) {
    alert("You are trying to register account on Zyntra. In order to register this account you need to be on whitelist, which is out of control from Zyntrox. Try talking with Zyntra owners.");
}
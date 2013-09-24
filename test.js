var VSTHost = require("./node-vst-host").host;

var host = new VSTHost();

host.listPlugins( function(names) {
//	console.log( "Available Plugins");
//	console.log( names );
});

host.processAudio( "C:/burst1.wav", "C:/TESTOUTPUTWIN.wav", ["iZNectar2"] );
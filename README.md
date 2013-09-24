# node-vst-host

A (thin) wrapper for [MrsWatson] (https://github.com/teragonaudio/MrsWatson) that allows you to process audio files using VST plugins

### Installation

```
npm install node-vst-host
```

### Usage

```javascript
var VSTHost = require("./node-vst-host").host;

var host = new VSTHost();

// Print our a list of the available plugins
host.listPlugins( function(names) {
	console.log( "Available Plugins");
	console.log( names );
});

// Process an audio file with a VST plugin
host.processAudio( "C:/inputFile.wav", "C:/outputFile.wav", ["pluginName1", "pluginName2"] );
```
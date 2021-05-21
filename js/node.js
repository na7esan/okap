// FaceApp感情認識
/**
* This file demonstrates how to invoke WebEmpath's analyzeWav API from node.js */
var fs = require('fs');
var request = require('request');
const API_ENDPOINT = 'https://api.webempath.net/v2/analyzeWav'; var formData = {
apikey: "tWwbQ5OHARZJk9UhI27DyFRy5_opr2ftTkKRoYcQKbc",
wav: fs.createReadStream("/PATH/TO/WAVFILE.wav") };
request.post({ url: API_ENDPOINT, formData: formData }, function(err, response) { if (err) {
console.trace(err); } else {
var respBody = JSON.parse(response.body);
console.log("result: " + JSON.stringify(respBody)); }
});


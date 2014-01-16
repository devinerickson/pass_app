// JavaScript Document

// Get the Bluetooth plugin
var bluetoothSerial = cordova.require('bluetoothSerial');

// Get the current date
function getDate() {
	var today = new Date();
	var currentDate = today.toDateString();
	return currentDate;
}
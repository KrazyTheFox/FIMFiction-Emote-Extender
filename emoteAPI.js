/*
 *	Fimfiction Emote Script v2.0
 *
 *	Written by KrazyTheFox
 */

window.initialized = false;
window.emoteTables = [];

function initialize() {
	
	loadScript('http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
		init();
	});
	
}

function init() {
	
	if (window.initialized) {
		return;
	}
	
	$('div.textbox_container').css('height', '600');
	$('#comment_comment').css('height', '100% !important');
	$('div.emoticons_panel').css('background-color', '#000000');
	
	initialized = true;
	
	console.log("Success");
	
}

function addEmote(url, emoteName, shortTableName, longTableName) {
	
}

function loadScript(url, callback) {
	
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	
	script.onreadystatechange = callback;
	script.onload = callback;
	
	head.appendChild(script);
	
}
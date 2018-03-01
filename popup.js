/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
if((tabs[0]).url.indexOf("http://www.mspaintadventures.com/") > -1)
{
	
else //if current tab isn't homestuck
{
  //open homestuck
  window.open("http://www.mspaintadventures.com/?s=6&p=001901", "_newtab");
}
});

document.getElementById("keys").addListener("click", function(){
	
})*/
window.onload = function() {
	var keys = false, cleanup = false, color = false, names = false, Daedra = false;
	chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
        //send cookies to current tab
        chrome.tabs.sendMessage(tabs[0].id, "cookie request", function(responce){
			var cookies = responce.split(';');
			for(var i = 0; i < cookies.length; ++i){
				switch(cookies[i].split("=")[0]){
					case " keys": keys = (cookies[i].split("=")[1] == "true"); break;
					case " cleanup": cleanup = (cookies[i].split("=")[1] == "true"); break;
					case " color": color = (cookies[i].split("=")[1] == "true"); break;
					case " names": names = (cookies[i].split("=")[1] == "true"); break;
					/*case " Daedra": Daedra = (cookies[i].split("=")[1] == "true"); break; */
				}
			}
			//set colors on page
			if(keys) document.getElementById("keys").style.backgroundColor = "#4CAF50";
			if(cleanup) document.getElementById("cleanup").style.backgroundColor = "#4CAF50";
			if(color) document.getElementById("color").style.backgroundColor = "#4CAF50";
			if(names) document.getElementById("names").style.backgroundColor = "#4CAF50";
			/*if(Daedra) document.getElementById("Daedra").style.backgroundColor = "#4CAF50";*/
		});
	});

//////////////////////////////////////////////////
//                 HOVER EVENT                  //
//////////////////////////////////////////////////
	//KEYS
	document.getElementById("keys").addEventListener("mouseover", function() {
		if(keys) this.style.backgroundColor = "#f44336"; //red
		else     this.style.backgroundColor = "#4CAF50"; //green
	});
	document.getElementById("keys").addEventListener("mouseout", function() {
		if(keys) this.style.backgroundColor = "#4CAF50"; //red
		else     this.style.backgroundColor = "#f44336"; //green
	});
	//CLEANUP
	document.getElementById("cleanup").addEventListener("mouseover", function() {
		if(cleanup) this.style.backgroundColor = "#f44336"; //red
		else     this.style.backgroundColor = "#4CAF50"; //green
	});
	document.getElementById("cleanup").addEventListener("mouseout", function() {
		if(cleanup) this.style.backgroundColor = "#4CAF50"; //red
		else     this.style.backgroundColor = "#f44336"; //green
	});
	//COLOR
	document.getElementById("color").addEventListener("mouseover", function() {
		if(color) this.style.backgroundColor = "#f44336"; //red
		else     this.style.backgroundColor = "#4CAF50"; //green
	});
	document.getElementById("color").addEventListener("mouseout", function() {
		if(color) this.style.backgroundColor = "#4CAF50"; //red
		else     this.style.backgroundColor = "#f44336"; //green
	});
	//NAMES
	document.getElementById("names").addEventListener("mouseover", function() {
		if(names) this.style.backgroundColor = "#f44336"; //red
		else     this.style.backgroundColor = "#4CAF50"; //green
	});
	document.getElementById("names").addEventListener("mouseout", function() {
		if(names) this.style.backgroundColor = "#4CAF50"; //red
		else     this.style.backgroundColor = "#f44336"; //green
	});
	//DAEDRA
	/*document.getElementById("Daedra").addEventListener("mouseover", function() {
		if(Daedra) this.style.backgroundColor = "#f44336"; //red
		else     this.style.backgroundColor = "#4CAF50"; //green
	});
	document.getElementById("Daedra").addEventListener("mouseout", function() {
		if(Daedra) this.style.backgroundColor = "#4CAF50"; //red
		else     this.style.backgroundColor = "#f44336"; //green
	});*/

//////////////////////////////////////////////////
//                 CLICK EVENT                  //
//////////////////////////////////////////////////

	document.getElementById("keys").addEventListener("click", function(){
		chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
			//send cookies to current tab
			keys = !keys;
			chrome.tabs.sendMessage(tabs[0].id, "keys=" + keys.toString());
		});
	});

	document.getElementById("cleanup").addEventListener("click", function(){
		chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
			//send cookies to current tab
			cleanup = !cleanup;
			chrome.tabs.sendMessage(tabs[0].id, "cleanup=" + cleanup.toString());
		});
	});

	document.getElementById("color").addEventListener("click", function(){
		chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
			//send cookies to current tab
			color = !color;
			chrome.tabs.sendMessage(tabs[0].id, "color=" + color.toString());
		});
	});

	document.getElementById("names").addEventListener("click", function(){
		chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
			//send cookies to current tab
			names = !names;
			chrome.tabs.sendMessage(tabs[0].id, "names=" + names.toString());
		});
	});

	/*document.getElementById("Daedra").addEventListener("click", function(){
		chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
			//send cookies to current tab
			Daedra = !Daedra;
			chrome.tabs.sendMessage(tabs[0].id, "Daedra=" + Daedra.toString());
		});
	});*/

}
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
			//set text on buttons if disabled
			if(keys) document.getElementById("keys").innerHTML = "Disable key shortcuts";
			if(cleanup) document.getElementById("cleanup").innerHTML = "Disable page cleanup";
			if(color) document.getElementById("color").innerHTML = "Disable character coloring";
			if(names) document.getElementById("names").innerHTML = "Disable character naming";
			/*if(Daedra) document.getElementById("Daedra").style.backgroundColor = "#4CAF50";*/
		});
	});

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
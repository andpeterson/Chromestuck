/*document.cookie="keys=true"
document.cookie="cleanup=false"
document.cookie="colour=false"
document.cookie="names=false"
document.cookie="Daedra=false"*/

chrome.runtime.sendMessage("reloaded")

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log(request);
  if(request == "cookie request")
  {
	console.log(document.cookie);
    sendResponse(document.cookie);
  }
  else
  {
    document.cookie=request;
	switch(request){
		case "color=true": Color(); break;
		case "color=false": UnColor(); break;
		case "names=true": Names(); break;
		case "names=false": UnNames(); break;
		case "cleanup=true": Cleanup(); break;
		case "cleanup=false": location.reload(); break;
		case "keys=true": location.reload(); break;
		case "keys=false": location.reload(); break;
	}
	
  }
})

if(getCookie("color") == "true") Color();
if(getCookie("names") == "true") Names();

function Color() {
	
	//KIDS
  $("font:contains('John:'):first").attr("style", "color:#0715CD");
  $("a:contains('John:')").attr("style", "color:#0715CD");
  $("font:contains('Dave:'):first").attr("style", "color:#E00707");
  $("a:contains('Dave:')").attr("style", "color:#E00707");
  $("font:contains('Rose:'):first").attr("style", "color:#B536DA");
  $("a:contains('Rose:')").attr("style", "color:#B536DA");
  $("font:contains('Jade:'):first").attr("style", "color:#4AC925");
  $("a:contains('Jade:')").attr("style", "color:#4AC925");
  
	//TROLLS
  $("font:contains('Aradia:'):first").attr("style", "color:#A10000");
  $("a:contains('Aradia:')").attr("style", "color:#A10000");
  $("font:contains('Tavros:'):first").attr("style", "color:#A15000");
  $("a:contains('Tavros:')").attr("style", "color:#A15000");
  $("font:contains('Sollux:'):first").attr("style", "color:#A1A100");
  $("a:contains('Sollux:')").attr("style", "color:#A1A100");
  $("font:contains('Nepeta:'):first").attr("style", "color:#416600");
  $("a:contains('Nepeta:')").attr("style", "color:#416600");
  $("font:contains('Kanaya:'):first").attr("style", "color:#008141");
  $("a:contains('Kanaya:')").attr("style", "color:#008141");
  $("font:contains('Terezi:'):first").attr("style", "color:#008282");
  $("a:contains('Terezi:')").attr("style", "color:#008282");
  $("font:contains('Vriska:':first").attr("style", "color:#005682");
  $("a:contains('Vriska:')").attr("style", "color:#005682");
  $("font:contains('Equius:'):first").attr("style", "color:#000056");
  $("a:contains('Equius:')").attr("style", "color:#000056");
  $("font:contains('Gamzee:'):first").attr("style", "color:#2B0057");
  $("a:contains('Gamzee:')").attr("style", "color:#2B0057");
  $("font:contains('Eridan:'):first").attr("style", "color:#6A006A");
  $("a:contains('Eridan:')").attr("style", "color:#6A006A");
  $("font:contains('Feferi:'):first").attr("style", "color:#77003C");
  $("a:contains('Feferi:')").attr("style", "color:#77003C");
  $("font:contains('Karkat:'):first").attr("style", "color:#626262");
  $("a:contains('Karkat:')").attr("style", "color:#626262");

	//KIDS SPRITES
  $("font:contains('Nannasprite:'):first").attr("style", "color:#00d5f2");
  $("a:contains('Nannasprite:')").attr("style", "color:#00d5f2");
  $("font:contains('Jaspersprite:'):first").attr("style", "color:#f141ef");
  $("a:contains('Jaspersprite:')").attr("style", "color:#f141ef");
  $("font:contains('Davesprite'):first").attr("style", "color:#f2a400");
  $("a:contains('Davesprite'):").attr("style", "color:#f2a400");
  $("font:contains('Jadesprite'):first").attr("style", "color:#1f9400");
  $("a:contains('Jadesprite'):").attr("style", "color:#1f9400");
  
	
  
}
function UnColor() {
  $("font:contains('John:')").attr("style", "color:#000000");
  $("a:contains('John:')").attr("style", "color:#000000");
  $("font:contains('Dave:')").attr("style", "color:#000000");
  $("a:contains('Dave:')").attr("style", "color:#000000");
  $("font:contains('Rose:')").attr("style", "color:#000000");
  $("a:contains('Rose:')").attr("style", "color:#000000");
  $("font:contains('Jade:')").attr("style", "color:#000000");
  $("a:contains('Jade:')").attr("style", "color:#000000");
  $("font:contains('Aradia:')").attr("style", "color:#000000");
  $("a:contains('Aradia:')").attr("style", "color:#000000");
  $("font:contains('Tavros:')").attr("style", "color:#000000");
  $("a:contains('Tavros:')").attr("style", "color:#000000");
  $("font:contains('Sollux:')").attr("style", "color:#000000");
  $("a:contains('Sollux:')").attr("style", "color:#000000");
  $("font:contains('Nepeta:')").attr("style", "color:#000000");
  $("a:contains('Nepeta:')").attr("style", "color:#000000");
  $("font:contains('Kanaya:')").attr("style", "color:#000000");
  $("a:contains('Kanaya:')").attr("style", "color:#000000");
  $("font:contains('Terezi:')").attr("style", "color:#000000");
  $("a:contains('Terezi:')").attr("style", "color:#000000");
  $("font:contains('Vriska:')").attr("style", "color:#000000");
  $("a:contains('Vriska:')").attr("style", "color:#000000");
  $("font:contains('Equius:')").attr("style", "color:#000000");
  $("a:contains('Equius:')").attr("style", "color:#000000");
  $("font:contains('Gamzee:')").attr("style", "color:#000000");
  $("a:contains('Gamzee:')").attr("style", "color:#000000");
  $("font:contains('Eridan:')").attr("style", "color:#000000");
  $("a:contains('Eridan:')").attr("style", "color:#000000");
  $("font:contains('Feferi:')").attr("style", "color:#000000");
  $("a:contains('Feferi:')").attr("style", "color:#000000");
  $("font:contains('Karkat:')").attr("style", "color:#000000");
  $("a:contains('Karkat:')").attr("style", "color:#000000");
}
function Names(){
  document.body.innerHTML = document.body.innerHTML.replace(/John/gi, 'Zoosmell');
  document.body.innerHTML = document.body.innerHTML.replace(/Egbert/gi, 'Pooplord');
  document.body.innerHTML = document.body.innerHTML.replace(/Dave/gi, 'Insufferable');
  document.body.innerHTML = document.body.innerHTML.replace(/Strider/gi, 'Prick');
  document.body.innerHTML = document.body.innerHTML.replace(/Rose/gi, 'Flighty');
  document.body.innerHTML = document.body.innerHTML.replace(/Lalonde/gi, 'Broad');
  document.body.innerHTML = document.body.innerHTML.replace(/Jade/gi, 'Farmstink');
  document.body.innerHTML = document.body.innerHTML.replace(/Harley/gi, 'Buttlass');
}
function UnNames(){
  document.body.innerHTML = document.body.innerHTML.replace(/Zoosmell/gi, 'John');
  document.body.innerHTML = document.body.innerHTML.replace(/Pooplord/gi, 'Egbert');
  document.body.innerHTML = document.body.innerHTML.replace(/Insufferable/gi, 'Dave');
  document.body.innerHTML = document.body.innerHTML.replace(/Prick/gi, 'Strider');
  document.body.innerHTML = document.body.innerHTML.replace(/Flighty/gi, 'Rose');
  document.body.innerHTML = document.body.innerHTML.replace(/Broad/gi, 'Lalonde');
  document.body.innerHTML = document.body.innerHTML.replace(/Farmstink/gi, 'Jade');
  document.body.innerHTML = document.body.innerHTML.replace(/Buttlass/gi, 'Harley');
}

//cleanup
function Cleanup(){
	if(location.href.indexOf('http://www.mspaintadventures.com/') > -1)
	{
		if(location.href.includes('http://www.mspaintadventures.com/ACT6ACT5ACT1x2COMBO.php')){
			$("[background = 'images/bannerframeX2.png']").parent().parent().parent().parent().parent().remove();
			$("img[src='images/sponsors.png']").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
		}
		else {
			$("[background = 'http://cdn.mspaintadventures.com/images/bannerframe.png']").parent().parent().parent().parent().parent().remove();
			$("img[src='http://cdn.mspaintadventures.com/images/news.png']").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
		}
	}
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

/*var fontStyle = document.createElement('style');
fontStyle.appendChild(document.createTextNode("\
@font-face{\
  font-family: Daedra;\
  src: url('Daedra.otf');\
}\
"));*/

/*if(getCookie("Daedra") == "true")
{
  document.head.appendChild(fontStyle);
  $('p').css("font-family", "Daedra");
  $('font').css("font-family", "Daedra");
  $('a').css("font-family", "Daedra");
}*/
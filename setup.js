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
	}
	
  }
})

function Color() {
  $("font:contains('John:')").attr("style", "color:#0715CD");
  $("font:contains('Dave:')").attr("style", "color:#E00707");
  $("font:contains('Rose:')").attr("style", "color:#B536DA");
  $("font:contains('Jade:')").attr("style", "color:#4AC925");
  $("font:contains('Aradia:')").attr("style", "color:#A10000");
  $("font:contains('Tavros:')").attr("style", "color:#A15000");
  $("font:contains('Sollux:')").attr("style", "color:#A1A100");
  $("font:contains('Nepeta:')").attr("style", "color:#416600");
  $("font:contains('Kanaya:')").attr("style", "color:#008141");
  $("font:contains('Terezi:')").attr("style", "color:#008282");
  $("font:contains('Vriska:')").attr("style", "color:#005682");
  $("font:contains('Equius:')").attr("style", "color:#000056");
  $("font:contains('Gamzee:')").attr("style", "color:#2B0057");
  $("font:contains('Eridan:')").attr("style", "color:#6A006A");
  $("font:contains('Feferi:')").attr("style", "color:#77003C");
  $("font:contains('Karkat:')").attr("style", "color:#626262");
}
function UnColor() {
  $("font:contains('John:')").attr("style", "color:#000000");
  $("font:contains('Dave:')").attr("style", "color:#000000");
  $("font:contains('Rose:')").attr("style", "color:#000000");
  $("font:contains('Jade:')").attr("style", "color:#000000");
  $("font:contains('Aradia:')").attr("style", "color:#000000");
  $("font:contains('Tavros:')").attr("style", "color:#000000");
  $("font:contains('Sollux:')").attr("style", "color:#000000");
  $("font:contains('Nepeta:')").attr("style", "color:#000000");
  $("font:contains('Kanaya:')").attr("style", "color:#000000");
  $("font:contains('Terezi:')").attr("style", "color:#000000");
  $("font:contains('Vriska:')").attr("style", "color:#000000");
  $("font:contains('Equius:')").attr("style", "color:#000000");
  $("font:contains('Gamzee:')").attr("style", "color:#000000");
  $("font:contains('Eridan:')").attr("style", "color:#000000");
  $("font:contains('Feferi:')").attr("style", "color:#000000");
  $("font:contains('Karkat:')").attr("style", "color:#000000");
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

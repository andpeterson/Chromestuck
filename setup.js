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
    alert("Changes Made");
    location.reload();
  }
})
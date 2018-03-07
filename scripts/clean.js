//if homepage redirect to first page
if(location.href == 'http://www.mspaintadventures.com/' || location.href == 'http://www.mspaintadventures.com/?s=6')
{
  location.href = 'http://www.mspaintadventures.com/?s=6&p=001901';
}


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
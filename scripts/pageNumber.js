chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request == "reloaded")
  {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    if((tabs[0]).url.indexOf("http://www.mspaintadventures.com/") > -1)
    {
      var page_num = parseInt(tabs[0].url.substr(tabs[0].url.indexOf("6&p=") + 6)) - 1900;
      console.log(parseInt(tabs[0].url.substr(tabs[0].url.indexOf("6&p=") + 6))-1900);
      chrome.browserAction.setBadgeBackgroundColor({color: "#626262"});
      console.log(typeof(parseInt(tabs[0].url.substr(tabs[0].url.indexOf("6&p=") + 6))-1900));
      chrome.browserAction.setBadgeText({text: page_num.toString()});
    }
    });
  }
})